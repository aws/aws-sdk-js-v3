/// <reference types="mocha" />
import { expect } from "chai";
import { S3 } from "./S3";
import { SerializeMiddleware } from "@aws-sdk/types";
import { HttpRequest } from "@aws-sdk/protocol-http";

describe("endpoint", () => {
  it("users can override endpoint from client.", async () => {
    //use s3 here but all the clients are generated similarly
    const endpointValidator: SerializeMiddleware<any, any> = (next) => (args) => {
      // middleware intercept the request and return it early
      const request = args.request as HttpRequest;
      expect(request.protocol).to.equal("http:");
      expect(request.hostname).to.equal("localhost");
      expect(request.port).to.equal(8080);
      //query and path should not be overwritten
      expect(request.query).not.to.contain({ foo: "bar" });
      expect(request.path).not.to.equal("/path");
      return Promise.resolve({ output: {} as any, response: {} as any });
    };
    const client = new S3({ endpoint: "http://localhost:8080/path?foo=bar" });
    client.middlewareStack.add(endpointValidator, {
      step: "serialize",
      name: "endpointValidator",
      priority: "low",
    });
    return await client.putObject({
      Bucket: "bucket",
      Key: "key",
      Body: "body",
    });
  });
});
