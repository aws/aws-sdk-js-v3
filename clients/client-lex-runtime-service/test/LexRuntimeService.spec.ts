import { HttpRequest } from "@smithy/protocol-http";
import { SerializeMiddleware } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { LexRuntimeService } from "../src/LexRuntimeService";

describe("@aws-sdk/client-lex-runtime-service", () => {
  describe("PostContent", () => {
    it("should contain correct x-amz-content-sha256 header", async () => {
      const validator: SerializeMiddleware<any, any> = (next) => (args) => {
        // middleware intercept the request and return it early
        const request = args.request as HttpRequest;
        expect(request.headers).to.have.property("x-amz-content-sha256", "UNSIGNED-PAYLOAD");
        return Promise.resolve({ output: {} as any, response: {} as any });
      };
      const client = new LexRuntimeService({
        region: "us-west-2",
        credentials: {
          accessKeyId: "CLIENT_TEST",
          secretAccessKey: "CLIENT_TEST",
        },
      });
      client.middlewareStack.add(validator, {
        step: "serialize",
        name: "endpointValidator",
        priority: "low",
      });
      return await client.postContent({
        botAlias: "alias",
        botName: "bot",
        userId: "user",
        contentType: "text/plain; charset=utf-8",
        inputStream: "hello world!",
      });
    });
  });
});
