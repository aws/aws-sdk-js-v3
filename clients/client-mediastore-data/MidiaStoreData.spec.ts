/// <reference types="mocha" />
import { expect } from "chai";
import { MediaStoreData } from "./MediaStoreData";
import { SerializeMiddleware } from "@aws-sdk/types";
import { HttpRequest } from "@aws-sdk/protocol-http";

describe("@aws-sdk/client-mediastore-data", () => {
  describe("PutObject", () => {
    it("should contain correct x-amz-content-sha256 header", async () => {
      const validator: SerializeMiddleware<any, any> = (next) => (args) => {
        // middleware intercept the request and return it early
        const request = args.request as HttpRequest;
        expect(request.headers).to.have.property("x-amz-content-sha256", "UNSIGNED-PAYLOAD");
        return Promise.resolve({ output: {} as any, response: {} as any });
      };
      const client = new MediaStoreData({});
      client.middlewareStack.add(validator, {
        step: "serialize",
        name: "endpointValidator",
        priority: "low",
      });
      return await client.putObject({
        Path: "foo.avi",
        Body: "binary body",
      });
    });
  });
});
