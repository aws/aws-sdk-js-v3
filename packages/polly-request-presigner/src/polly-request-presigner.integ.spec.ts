import { PollyClient } from "@aws-sdk/client-polly";
import { describe, expect, test as it } from "vitest";

import { getSynthesizeSpeechUrl } from "./index";

describe("polly-request-presigner", () => {
  it("should sign URLs", async () => {
    const url = await getSynthesizeSpeechUrl({
      client: new PollyClient({
        credentials: {
          accessKeyId: "INTEG",
          secretAccessKey: "INTEG",
        },
        region: "us-east-1",
      }),
      params: {
        Text: "Hello world, the polly presigner is really cool!",
        OutputFormat: "mp3",
        VoiceId: "Kimberly",
      },
    });

    const urlSegments = url.split("&");
    expect(urlSegments.sort()).toMatchObject([
      "Text=Hello%20world%2C%20the%20polly%20presigner%20is%20really%20cool%21",
      "VoiceId=Kimberly",
      "X-Amz-Algorithm=AWS4-HMAC-SHA256",
      /X-Amz-Credential=(.*?)%2F(\d{8})%2Fus-east-1%2Fpolly%2Faws4_request/,
      /X-Amz-Date=\d{8}T\d{6}Z/,
      "X-Amz-Expires=3600",
      /X-Amz-Signature=[a-f0-9]+/,
      /X-Amz-SignedHeaders=(host|%3Aauthority)/,
      "https://polly.us-east-1.amazonaws.com/v1/speech?OutputFormat=mp3",
      /x-amz-user-agent=aws-sdk-js%2F\d\.\d+\.\d+/,
    ]);
  });
});
