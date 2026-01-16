import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { SignatureV4MultiRegion } from "@aws-sdk/signature-v4-multi-region";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { S3RequestPresigner } from "./presigner";

vi.mock("@aws-sdk/util-format-url", () => ({
  formatUrl: (url: any) => url,
}));

vi.mock("./presigner");

import { HttpRequest } from "@smithy/protocol-http";
import { RequestPresigningArguments } from "@smithy/types";

import { getSignedUrl } from "./getSignedUrl";

vi.mock("@smithy/middleware-endpoint", async () => {
  const originalModule: any = await vi.importActual("@smithy/middleware-endpoint");
  return {
    ...originalModule,
    getEndpointFromInstructions: vi.fn(() =>
      Promise.resolve({
        properties: {
          authSchemes: [{ name: "sigv4a", signingRegionSet: ["*"] }],
        },
      })
    ),
  };
});

describe("getSignedUrl", () => {
  const mockPresignedValue = "a presigned url";
  const mockPresign = vi.fn().mockReturnValue(mockPresignedValue);
  const mockMultiRegionPresign = vi.fn();
  const mockMultiRegionSign = vi.fn();
  const clientParams = {
    region: "us-foo-1",
    credentials: {
      accessKeyId: "UNIT_TEST",
      secretAccessKey: "UNIT_TEST",
    },
  };

  beforeEach(() => {
    vi.mocked(S3RequestPresigner).prototype.presign = mockPresign;
    vi.mocked(SignatureV4MultiRegion).prototype.presign = mockMultiRegionPresign;
    vi.mocked(SignatureV4MultiRegion).prototype.sign = mockMultiRegionSign;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should call S3Presigner.sign", async () => {
    const client = new S3Client(clientParams);
    const command = new GetObjectCommand({
      Bucket: "Bucket",
      Key: "Key",
    });
    const presignPromise = getSignedUrl(client, command);
    // do not mutate to the client or command
    expect(client.middlewareStack.remove("presignInterceptMiddleware")).toBe(false);
    expect(command.middlewareStack.remove("presignInterceptMiddleware")).toBe(false);

    const signed = await presignPromise;
    expect(signed).toBe(mockPresignedValue);
    expect(mockPresign).toBeCalled();
    expect(mockMultiRegionPresign).not.toBeCalled();
    expect(mockMultiRegionSign).not.toBeCalled();
    // do not add extra middleware to the client or command
    expect(client.middlewareStack.remove("presignInterceptMiddleware")).toBe(false);
    expect(command.middlewareStack.remove("presignInterceptMiddleware")).toBe(false);
  });

  it("should presign with signing region and service in context if exists", async () => {
    const signingRegion = "aws-foo-1";
    const signingService = "bar";
    const client = new S3Client(clientParams);
    client.middlewareStack.addRelativeTo(
      (next: any, context: any) => (args: any) => {
        context["signing_region"] = signingRegion;
        context["signing_service"] = signingService;
        return next(args);
      },
      {
        relation: "before",
        toMiddleware: "presignInterceptMiddleware",
      }
    );
    const command = new GetObjectCommand({
      Bucket: "Bucket",
      Key: "Key",
    });
    await getSignedUrl(client, command);
    expect(mockPresign).toBeCalled();
    expect(mockPresign.mock.calls[0][1]).toMatchObject({
      signingRegion,
      signingService,
    });
  });

  it("should presign with parameters from presign options if set", async () => {
    const options: RequestPresigningArguments = {
      signingRegion: "aws-foo-1",
      signingService: "bar",
      expiresIn: 900,
      signingDate: new Date(),
      signableHeaders: new Set(["head-1", "head-2"]),
      unsignableHeaders: new Set(["head-3", "head-4"]),
    };
    const client = new S3Client(clientParams);
    const command = new GetObjectCommand({
      Bucket: "Bucket",
      Key: "Key",
    });
    await getSignedUrl(client, command, options);
    expect(mockPresign).toBeCalled();
    expect(mockPresign.mock.calls[0][1]).toMatchObject(options);
  });

  it("should not throw if it's called concurrently", async () => {
    const client = new S3Client(clientParams);
    const command = new GetObjectCommand({
      Bucket: "Bucket",
      Key: "Key",
    });
    const commands = [command, command];
    return expect(Promise.all(commands.map((command) => getSignedUrl(client, command)))).resolves.toBeInstanceOf(Array);
  });

  it.each(["amz-sdk-invocation-id", "amz-sdk-request", "x-amz-user-agent"])(
    "should delete '%s' header",
    async (header) => {
      const client = new S3Client(clientParams);
      const command = new GetObjectCommand({
        Bucket: "Bucket",
        Key: "Key",
      });
      command.middlewareStack.add(
        (next) => (args) => {
          (args.request as HttpRequest).headers[header] = "foo";
          return next(args);
        },
        { step: "serialize", priority: "low" }
      );
      await getSignedUrl(client, command);
      expect(mockPresign).toBeCalled();
      expect(mockPresign.mock.calls[0][0].headers[header]).toBeUndefined();
    }
  );
  it("should set region to * when sigv4a is the auth scheme", async () => {
    const client = new S3Client(clientParams);
    const command = new GetObjectCommand({
      Bucket: "Bucket",
      Key: "Key",
    });

    await getSignedUrl(client, command);
    const presignerArgs = vi.mocked(S3RequestPresigner).mock.calls[0][0] as any;
    const region = await presignerArgs.region();

    expect(region).toBe("*");
    expect(mockPresign).toBeCalled();
  });

  it("should presign request with MRAP ARN", async () => {
    const client = new S3Client(clientParams);
    const command = new GetObjectCommand({
      Bucket: "arn:aws:s3::123456789012:accesspoint:mfzwi23gnjvgw.mrap",
      Key: "Key",
    });
    await getSignedUrl(client, command);
    expect(mockPresign).toBeCalled();
    expect(mockPresign.mock.calls[0][0]).toMatchObject({
      hostname: "mfzwi23gnjvgw.mrap.accesspoint.s3-global.amazonaws.com",
    });
  });

  it("should throw if presign request with MRAP ARN and disableMultiregionAccessPoints option", async () => {
    const client = new S3Client({
      ...clientParams,
      disableMultiregionAccessPoints: true,
    });
    const command = new GetObjectCommand({
      Bucket: "arn:aws:s3::123456789012:accesspoint:mfzwi23gnjvgw.mrap",
      Key: "Key",
    });

    const error = await getSignedUrl(client, command).catch((e) => e);
    expect(error.name).toEqual("EndpointError");
    expect(error.message).toEqual("Invalid configuration: Multi-Region Access Point ARNs are disabled.");
  });
});
