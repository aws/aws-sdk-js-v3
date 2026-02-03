import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { RekognitionStreaming } from "@aws-sdk/client-rekognitionstreaming";
import { describe, test as it } from "vitest";

describe("middleware-websocket", () => {
  const logger = {
    trace() {},
    debug() {},
    info() {},
    warn() {},
    error() {},
  };
  describe(RekognitionStreaming.name, () => {
    it("sets protocol, headers, moves params to query, and signs in the query", async () => {
      const client = new RekognitionStreaming({
        region: "us-west-2",
        logger,
        credentials: {
          accessKeyId: "INTEG",
          secretAccessKey: "INTEG",
        },
      });
      requireRequestsFrom(client).toMatch({
        protocol: "wss:",
        path: "/start-face-liveness-session-websocket",
        headers: {
          host: "streaming-rekognition.us-west-2.amazonaws.com",
          "content-type": /^undefined$/,
          "x-amz-content-sha256": /^undefined$/,
          "user-agent": /^aws-sdk-js/,
        },
        query: {
          "session-id": "abcd-1234",
          "video-width": "1024",
          "video-height": "1024",
          "challenge-versions": "a,b,c",
          "x-amz-user-agent": /^aws-sdk-js/,
          "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
          "X-Amz-Credential": /(.*?)\/(.*?)\/us-west-2\/rekognition\/aws4_request/,
          "X-Amz-Date": /./,
          "X-Amz-Expires": "60",
          "X-Amz-SignedHeaders": "host",
          "X-Amz-Signature": /./,
        },
      });
      client.config.requestHandler.metadata = {
        handlerProtocol: "websocket",
      };
      await client.startFaceLivenessSession({
        SessionId: "abcd-1234",
        VideoWidth: "1024",
        VideoHeight: "1024",
        ChallengeVersions: "a,b,c",
        LivenessRequestStream: (async function* () {})(),
      });
    });
  });
});
