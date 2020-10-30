/// <reference types="mocha" />
import { expect } from "chai";
import { S3 } from "./S3";
import { SerializeMiddleware, BuildMiddleware } from "@aws-sdk/types";
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

describe("Accesspoint ARN", async () => {
  const endpointValidator: BuildMiddleware<any, any> = (next, context) => (args) => {
    // middleware intercept the request and return it early
    const request = args.request as HttpRequest;
    return Promise.resolve({
      output: {
        $metadata: { attempts: 0, httpStatusCode: 200 },
        request,
        context,
      } as any,
      response: {} as any,
    });
  };

  it("should succeed with access point ARN", async () => {
    const client = new S3({ region: "us-west-2" });
    client.middlewareStack.add(endpointValidator, { step: "build", priority: "low" });
    const result: any = await client.putObject({
      Bucket: "arn:aws:s3:us-west-2:123456789012:accesspoint:myendpoint",
      Key: "key",
      Body: "body",
    });
    expect(result.request.hostname).to.eql("myendpoint-123456789012.s3-accesspoint.us-west-2.amazonaws.com");
  });

  it("should sign request with region from ARN is useArnRegion is set", async () => {
    const client = new S3({
      region: "us-east-1",
      useArnRegion: true,
      credentials: { accessKeyId: "key", secretAccessKey: "secret" },
    });
    client.middlewareStack.add(endpointValidator, { step: "finalizeRequest", priority: "low" });
    const result: any = await client.putObject({
      Bucket: "arn:aws:s3:us-west-2:123456789012:accesspoint:myendpoint",
      Key: "key",
      Body: "body",
    });
    expect(result.request.hostname).to.eql("myendpoint-123456789012.s3-accesspoint.us-west-2.amazonaws.com");
    // Sign request with us-west-2 region from bucket access point ARN
    expect(result.request.headers.authorization).to.contain("/us-west-2/s3/aws4_request, SignedHeaders=");
  });

  it("should succeed with outposts ARN", async () => {
    const OutpostId = "op-01234567890123456";
    const AccountId = "123456789012";
    const region = "us-west-2";
    const credentials = { accessKeyId: "key", secretAccessKey: "secret" };
    const client = new S3({ region: "us-east-1", credentials, useArnRegion: true });
    client.middlewareStack.add(endpointValidator, { step: "finalizeRequest", priority: "low" });
    const result: any = await client.putObject({
      Bucket: `arn:aws:s3-outposts:${region}:${AccountId}:outpost/${OutpostId}/accesspoint/abc-111`,
      Key: "key",
      Body: "body",
    });
    expect(result.request.hostname).to.eql(`abc-111-${AccountId}.${OutpostId}.s3-outposts.us-west-2.amazonaws.com`);
    const date = new Date().toISOString().substr(0, 10).replace(/-/g, ""); //20201029
    expect(result.request.headers["authorization"]).contains(
      `Credential=${credentials.accessKeyId}/${date}/${region}/s3-outposts/aws4_request`
    );
  });
});
