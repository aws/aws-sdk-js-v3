import { LexRuntimeV2 } from "@aws-sdk/client-lex-runtime-v2";
import { RekognitionStreaming } from "@aws-sdk/client-rekognitionstreaming";
import { TranscribeStreaming } from "@aws-sdk/client-transcribe-streaming";
import { Decoder, Encoder, EventStreamPayloadHandlerProvider } from "@smithy/types";
import { describe, expect, test as it, vi } from "vitest";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";
import { resolveEventStreamConfig } from "./eventStreamConfiguration";

describe("middleware-eventstream", () => {
  const logger = {
    trace() {},
    debug() {},
    info() {},
    warn() {},
    error() {},
  };

  describe("config resolver", () => {
    it("maintains object custody", () => {
      const input = {
        utf8Encoder: vi.fn(),
        utf8Decoder: vi.fn(),
        signer: vi.fn(),
        eventStreamPayloadHandlerProvider: vi.fn(),
      };
      expect(resolveEventStreamConfig(input)).toBe(input);
    });
  });

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
