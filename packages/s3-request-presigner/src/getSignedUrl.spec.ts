import { beforeEach, describe, expect, test as it, vi } from "vitest";

vi.mock("@aws-sdk/signature-v4-multi-region", async () => ({
  ...((await vi.importActual("@aws-sdk/signature-v4-multi-region")) as any),
  SignatureV4MultiRegion: vi.fn().mockImplementation(() => ({
    presign: vi.fn(),
    sign: vi.fn(),
  })),
}));

import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { SignatureV4MultiRegion } from "@aws-sdk/signature-v4-multi-region";

vi.mock("./presigner", () => ({
  S3RequestPresigner: vi.fn().mockReturnValue({
    presign: vi.fn(),
  }),
}));

import { S3RequestPresigner } from "./presigner";

vi.mock("@aws-sdk/util-format-url", () => ({
  formatUrl: (url: any) => url,
}));

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
  const mockS3RequestPresigner = new S3RequestPresigner({} as any);
  const mockSignatureV4MultiRegion = new SignatureV4MultiRegion({} as any);
  const clientParams = {
    region: "us-foo-1",
    credentials: {
      accessKeyId: "UNIT_TEST",
      secretAccessKey: "UNIT_TEST",
    },
  };

  beforeEach(() => {
    vi.mocked(mockS3RequestPresigner.presign).mockReset();
    vi.clearAllMocks();
  });

  it("should call S3Presigner.sign", async () => {
    const mockPresigned = "a presigned url";
    vi.mocked(mockS3RequestPresigner.presign).mockReturnValue(mockPresigned as any);
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
    expect(signed).toBe(mockPresigned);
    expect(vi.mocked(mockS3RequestPresigner.presign)).toBeCalled();
    expect(vi.mocked(mockSignatureV4MultiRegion).presign).not.toBeCalled();
    expect(vi.mocked(mockSignatureV4MultiRegion).sign).not.toBeCalled();
    // do not add extra middleware to the client or command
    expect(client.middlewareStack.remove("presignInterceptMiddleware")).toBe(false);
    expect(command.middlewareStack.remove("presignInterceptMiddleware")).toBe(false);
  });

  it("should presign with signing region and service in context if exists", async () => {
    const mockPresigned = "a presigned url";
    vi.mocked(mockS3RequestPresigner.presign).mockReturnValue(mockPresigned as any);
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
    expect(vi.mocked(mockS3RequestPresigner.presign)).toBeCalled();
    expect(vi.mocked(mockS3RequestPresigner.presign).mock.calls[0][1]).toMatchObject({
      signingRegion,
      signingService,
    });
  });

  it("should presign with parameters from presign options if set", async () => {
    const mockPresigned = "a presigned url";
    vi.mocked(mockS3RequestPresigner.presign).mockReturnValue(mockPresigned as any);
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
    expect(vi.mocked(mockS3RequestPresigner.presign)).toBeCalled();
    expect(vi.mocked(mockS3RequestPresigner.presign).mock.calls[0][1]).toMatchObject(options);
  });

  it("should not throw if it's called concurrently", async () => {
    const mockPresigned = "a presigned url";
    vi.mocked(mockS3RequestPresigner.presign).mockReturnValue(mockPresigned as any);
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
      expect(vi.mocked(mockS3RequestPresigner.presign)).toBeCalled();
      expect(vi.mocked(mockS3RequestPresigner.presign).mock.calls[0][0].headers[header]).toBeUndefined();
    }
  );
  it("should set region to * when sigv4a is the auth scheme", async () => {
    const mockPresigned = "a presigned url";
    vi.mocked(mockS3RequestPresigner.presign).mockReturnValue(mockPresigned as any);

    const client = new S3Client(clientParams);
    const command = new GetObjectCommand({
      Bucket: "Bucket",
      Key: "Key",
    });

    await getSignedUrl(client, command);
    const presignerArgs = vi.mocked(S3RequestPresigner).mock.calls[0][0] as any;
    const region = await presignerArgs.region();

    expect(region).toBe("*");
    expect(vi.mocked(mockS3RequestPresigner.presign)).toBeCalled();
  });

  it("should presign request with MRAP ARN", async () => {
    const mockPresigned = "a presigned url";
    vi.mocked(mockS3RequestPresigner.presign).mockReturnValue(mockPresigned as any);
    const client = new S3Client(clientParams);
    const command = new GetObjectCommand({
      Bucket: "arn:aws:s3::123456789012:accesspoint:mfzwi23gnjvgw.mrap",
      Key: "Key",
    });
    await getSignedUrl(client, command);
    expect(vi.mocked(mockS3RequestPresigner.presign)).toBeCalled();
    expect(vi.mocked(mockS3RequestPresigner.presign).mock.calls[0][0]).toMatchObject({
      hostname: "mfzwi23gnjvgw.mrap.accesspoint.s3-global.amazonaws.com",
    });
  });

  it("should throw if presign request with MRAP ARN and disableMultiregionAccessPoints option", () => {
    const mockPresigned = "a presigned url";
    vi.mocked(mockS3RequestPresigner.presign).mockReturnValue(mockPresigned as any);
    const client = new S3Client({
      ...clientParams,
      disableMultiregionAccessPoints: true,
    });
    const command = new GetObjectCommand({
      Bucket: "arn:aws:s3::123456789012:accesspoint:mfzwi23gnjvgw.mrap",
      Key: "Key",
    });
    return expect(getSignedUrl(client, command)).rejects.toEqual(
      new (class EndpointError extends Error {
        constructor(...args: any[]) {
          super(...args);
          this.name = "EndpointError";
        }
      })("Invalid configuration: Multi-Region Access Point ARNs are disabled.")
    );
  });
});
