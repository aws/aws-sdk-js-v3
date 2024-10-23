import { TranscribeStreaming } from "@aws-sdk/client-transcribe-streaming";
import { describe, expect, test as it } from "vitest";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";

describe("middleware-sdk-transcribe-streaming", () => {
  // TODO: http2 in CI
  describe.skip(TranscribeStreaming.name, () => {
    it("should set port on hostname and copy params to query", async () => {
      const client = new TranscribeStreaming({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        headers: {
          "content-type": /undefined/,
          host: "transcribestreaming.us-west-2.amazonaws.com:8443",
        },
        query: {
          "sample-rate": "144",
          "media-encoding": "pcm",
          "session-id": /./,
          "x-amz-user-agent": /./,
          "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
          "X-Amz-Credential": /./,
          "X-Amz-Date": /./,
          "X-Amz-Expires": /./,
          "X-Amz-SignedHeaders": "host",
          "X-Amz-Signature": /./,
        },
        protocol: "wss:",
        path: "/stream-transcription-websocket",
        method: "GET",
        hostname: "transcribestreaming.us-west-2.amazonaws.com:8443",
      });

      client.config.requestHandler.metadata = {
        handlerProtocol: "websocket",
      };

      await client.startStreamTranscription({
        MediaSampleRateHertz: 144,
        MediaEncoding: "pcm",
        AudioStream: {
          [Symbol.asyncIterator]() {
            return this as any;
          },
        },
      });

      expect.hasAssertions();
    });
  });
});
