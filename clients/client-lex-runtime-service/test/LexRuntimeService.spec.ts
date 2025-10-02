import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { Readable } from "node:stream";
import { describe, test as it } from "vitest";

import { LexRuntimeService } from "../src/LexRuntimeService";

describe("@aws-sdk/client-lex-runtime-service", () => {
  describe("PostContent", () => {
    it("should contain correct x-amz-content-sha256 header", async () => {
      const client = new LexRuntimeService({
        region: "us-west-2",
        credentials: {
          accessKeyId: "CLIENT_TEST",
          secretAccessKey: "CLIENT_TEST",
        },
      });

      requireRequestsFrom(client).toMatch({
        headers: {
          "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
        },
      });

      return await client.postContent({
        botAlias: "alias",
        botName: "bot",
        userId: "user",
        contentType: "text/plain; charset=utf-8",
        inputStream: Readable.from(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8])),
      });
    });
  });
});
