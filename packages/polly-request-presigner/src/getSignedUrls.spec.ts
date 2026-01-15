import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly";
import { SignatureV4 } from "@smithy/signature-v4";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

vi.mock("@aws-sdk/util-format-url", () => ({
  formatUrl: (url: any) => url,
}));

import { AwsCredentialIdentity, RequestPresigningArguments } from "@smithy/types";

import { getSignedUrl } from "./getSignedUrls";

describe("getSignedUrl", () => {
  const mockPresignedValue = "a presigned url";
  const mockPresign = vi.fn().mockReturnValue(mockPresignedValue);
  const mockSign = vi.fn();
  const credentials: AwsCredentialIdentity = {
    secretAccessKey: "unit-test",
    accessKeyId: "unit-test",
    sessionToken: "unit-test",
  };
  const clientParams = { region: "us-foo-1", credentials };

  beforeEach(() => {
    vi.mocked(SignatureV4).prototype.presign = mockPresign;
    vi.mocked(SignatureV4).prototype.sign = mockSign;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should call SignatureV4.sign", async () => {
    const client = new PollyClient(clientParams);
    const command = new SynthesizeSpeechCommand({
      Text: "hello world, this is alex",
      OutputFormat: "mp3",
      VoiceId: "Kimberly",
    });
    const signed = await getSignedUrl(client, command);

    expect(signed).toBe(mockPresignedValue);
    expect(mockPresign).toBeCalled();
    expect(mockSign).not.toBeCalled();
    expect(client.middlewareStack.remove("presignInterceptMiddleware")).toBe(false);
    expect(command.middlewareStack.remove("presignInterceptMiddleware")).toBe(false);
  });

  it("should presign with signing region and service in context if exists", async () => {
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

    expect(mockPresign).toBeCalledTimes(1);
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
    const client = new PollyClient(clientParams);
    const command = new SynthesizeSpeechCommand({
      Text: "hello world, this is alex",
      OutputFormat: "mp3",
      VoiceId: "Kimberly",
    });
    await getSignedUrl(client, command, options);
    expect(mockPresign).toBeCalled();
    expect(mockPresign.mock.calls[0][1]).toMatchObject(options);
  });

  it("should not throw if called concurrently", async () => {
    const client = new PollyClient(clientParams);
    const command = new SynthesizeSpeechCommand({
      Text: "hello world, this is alex",
      OutputFormat: "mp3",
      VoiceId: "Kimberly",
    });
    const result = await Promise.all([getSignedUrl(client, command), getSignedUrl(client, command)]);
    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(2);
    expect(mockPresign).toHaveBeenCalledTimes(2);
  });
});
