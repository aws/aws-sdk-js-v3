import { beforeEach, describe, expect, test as it, vi } from "vitest";

vi.mock("@smithy/signature-v4", () => ({
  SignatureV4: vi.fn().mockReturnValue({
    presign: vi.fn(),
    sign: vi.fn(),
  }),
}));
import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";
import { SignatureV4 } from "@smithy/signature-v4";

vi.mock("@aws-sdk/util-format-url", () => ({
  formatUrl: (url: any) => url,
}));

import { AwsCredentialIdentity, RequestPresigningArguments } from "@smithy/types";

import { getSignedUrl } from "./getSignedUrls";

describe("getSignedUrl", () => {
  const mockInstance = new SignatureV4({} as any);
  const credentials: AwsCredentialIdentity = {
    secretAccessKey: "unit-test",
    accessKeyId: "unit-test",
    sessionToken: "unit-test",
  };
  const clientParams = { region: "us-foo-1", credentials };

  beforeEach(() => {
    vi.mocked(mockInstance).presign.mockReset();
  });

  it("should call SignatureV4.sign", async () => {
    const mockPresigned = "a presigned url";
    vi.mocked(mockInstance).presign.mockReturnValue(mockPresigned as any);
    const client = new PollyClient(clientParams);
    const command = new SynthesizeSpeechCommand({
      Text: "hello world, this is alex",
      OutputFormat: "mp3",
      VoiceId: "Kimberly",
    });
    const signed = await getSignedUrl(client, command);
    expect(signed).toBe(mockPresigned);
    expect(vi.mocked(mockInstance).presign).toBeCalled();
    expect(vi.mocked(mockInstance).sign).not.toBeCalled();
    expect(client.middlewareStack.remove("presignInterceptMiddleware")).toBe(false);
    expect(command.middlewareStack.remove("presignInterceptMiddleware")).toBe(false);
  });

  it("should presign with signing region and service in context if exists", async () => {
    const mockPresigned = "a presigned url";
    vi.mocked(mockInstance).presign.mockReturnValue(mockPresigned as any);
    const signingRegion = "aws-foo-1";
    const signingService = "bar";
    const client = new PollyClient(clientParams);
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
    const command = new SynthesizeSpeechCommand({
      Text: "hello world, this is alex",
      OutputFormat: "mp3",
      VoiceId: "Kimberly",
    });
    await getSignedUrl(client, command);
    expect(vi.mocked(mockInstance).presign).toBeCalled();
    expect(vi.mocked(mockInstance).presign.mock.calls[0][1]).toMatchObject({
      signingRegion,
      signingService,
    });
  });

  it("should presign with parameters from presign options if set", async () => {
    const mockPresigned = "a presigned url";
    vi.mocked(mockInstance).presign.mockReturnValue(mockPresigned as any);
    const options: RequestPresigningArguments = {
      signingRegion: "aws-foo-1",
      signingService: "bar",
      expiresIn: 900,
      signingDate: new Date(),
      signableHeaders: new Set(["head-1", "head-2"]),
      unsignableHeaders: new Set(["head-3", "head-4"]),
    };
    const client = new PollyClient(clientParams);
    const command = new SynthesizeSpeechCommand({
      Text: "hello world, this is alex",
      OutputFormat: "mp3",
      VoiceId: "Kimberly",
    });
    await getSignedUrl(client, command, options);
    expect(vi.mocked(mockInstance).presign).toBeCalled();
    expect(vi.mocked(mockInstance).presign.mock.calls[0][1]).toMatchObject(options);
  });
  it("should not throw if called concurrently", async () => {
    const mockPresigned = "a presigned url";
    vi.mocked(mockInstance).presign.mockReturnValue(mockPresigned as any);
    const client = new PollyClient(clientParams);
    const command = new SynthesizeSpeechCommand({
      Text: "hello world, this is alex",
      OutputFormat: "mp3",
      VoiceId: "Kimberly",
    });
    const result = await Promise.all([getSignedUrl(client, command), getSignedUrl(client, command)]);
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(2);
    expect(vi.mocked(mockInstance).presign).toHaveBeenCalledTimes(2);
  });
});
