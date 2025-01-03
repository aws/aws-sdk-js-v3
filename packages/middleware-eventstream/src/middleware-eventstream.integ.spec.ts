import { LexRuntimeV2 } from "@aws-sdk/client-lex-runtime-v2";
import { RekognitionStreaming } from "@aws-sdk/client-rekognitionstreaming";
import { TranscribeStreaming } from "@aws-sdk/client-transcribe-streaming";
import { describe, expect, test as it } from "vitest";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";

describe("middleware-eventstream", () => {
  const logger = {
    trace() {},
    debug() {},
    info() {},
    warn() {},
    error() {},
  };

  // TODO: http2 in CI
  describe.skip(LexRuntimeV2.name, () => {
    it("should set streaming headers", async () => {
      const client = new LexRuntimeV2({ region: "us-west-2", logger });

      requireRequestsFrom(client).toMatch({
        headers: {
          "content-type": "application/vnd.amazon.eventstream",
          "x-amz-content-sha256": "STREAMING-AWS4-HMAC-SHA256-EVENTS",
        },
      });

      await client.startConversation({
        botId: "undefined",
        botAliasId: "undefined",
        localeId: "undefined",
        sessionId: "undefined",
        requestEventStream: (async function* () {})(),
      });

      expect.assertions(2);
    });
  });

  describe(RekognitionStreaming.name, () => {
    it("should set streaming headers", async () => {
      const client = new RekognitionStreaming({
        region: "us-west-2",
        logger,
        credentials: {
          accessKeyId: "INTEG",
          secretAccessKey: "INTEG",
        },
      });

      requireRequestsFrom(client).toMatch({
        headers: {
          "content-type": "application/vnd.amazon.eventstream",
          "x-amz-content-sha256": "STREAMING-AWS4-HMAC-SHA256-EVENTS",
        },
      });

      await client.startFaceLivenessSession({
        SessionId: "undefined",
        VideoWidth: "undefined",
        VideoHeight: "undefined",
        ChallengeVersions: "undefined",
        LivenessRequestStream: (async function* () {})(),
      });

      expect.assertions(2);
    });
  });

  // TODO: http2 in CI
  describe.skip(TranscribeStreaming.name, () => {
    it("should set streaming headers", async () => {
      const client = new TranscribeStreaming({ region: "us-west-2", logger });

      requireRequestsFrom(client).toMatch({
        headers: {
          "content-type": "application/vnd.amazon.eventstream",
          "x-amz-content-sha256": "STREAMING-AWS4-HMAC-SHA256-EVENTS",
        },
      });

      await client.startStreamTranscription({
        MediaSampleRateHertz: 144,
        MediaEncoding: "ogg-opus",
        AudioStream: (async function* () {})(),
      });

      expect.assertions(2);
    });
  });
});
