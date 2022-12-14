/// <reference types="mocha" />
import { HttpRequest } from "@aws-sdk/protocol-http";
import { BuildMiddleware, FinalizeRequestMiddleware, SerializeMiddleware } from "@aws-sdk/types";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { PassThrough, Readable } from "stream";

import { S3 } from "../src/S3";

chai.use(chaiAsPromised);
const { expect } = chai;

describe("endpoint", () => {
  it("users can override endpoint from client.", async () => {
    //use s3 here but all the clients are generated similarly
    const endpointValidator: SerializeMiddleware<any, any> = (next) => (args) => {
      // middleware intercept the request and return it early
      const request = args.request as HttpRequest;
      expect(request.protocol).to.equal("http:");
      expect(request.hostname).to.equal("localhost");
      expect(request.port).to.equal(8080);
      expect(request.path).to.equal("/path/bucket/key");
      return Promise.resolve({ output: {} as any, response: {} as any });
    };
    const client = new S3({ endpoint: "http://localhost:8080/path", forcePathStyle: true });

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

describe("Endpoints from ARN", () => {
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

  describe("Accesspoint ARN", async () => {
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
  });

  describe("Outposts ARN", () => {
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
      const date = new Date().toISOString().slice(0, 10).replace(/-/g, ""); //20201029
      expect(result.request.headers["authorization"]).contains(
        `Credential=${credentials.accessKeyId}/${date}/${region}/s3-outposts/aws4_request`
      );
    });
  });

  describe("Object Lambda ARN", () => {
    it("should succeed with Object Lambda ARN", async () => {
      const region = "us-east-1";
      const credentials = { accessKeyId: "key", secretAccessKey: "secret" };
      const client = new S3({ region, credentials });
      client.middlewareStack.add(endpointValidator, { step: "finalizeRequest", priority: "low" });
      const result: any = await client.putObject({
        Bucket: "arn:aws:s3-object-lambda:us-east-1:123456789012:accesspoint/mybanner",
        Key: "key",
        Body: "body",
      });
      const date = new Date().toISOString().slice(0, 10).replace(/-/g, ""); //20201029
      expect(result.request.hostname).to.eql("mybanner-123456789012.s3-object-lambda.us-east-1.amazonaws.com");
      expect(result.request.headers["authorization"]).contains(
        `Credential=${credentials.accessKeyId}/${date}/${region}/s3-object-lambda/aws4_request`
      );
    });

    it("should update endpoint of WriteGetObjectResponse command", async () => {
      const region = "us-east-1";
      const credentials = { accessKeyId: "key", secretAccessKey: "secret" };
      const client = new S3({ region, credentials });
      client.middlewareStack.add(endpointValidator, { step: "finalizeRequest", priority: "low" });
      const requestRoute = "route123";
      const result: any = await client.writeGetObjectResponse({
        RequestRoute: requestRoute,
        RequestToken: "token",
        Body: new Readable(),
      });
      const date = new Date().toISOString().slice(0, 10).replace(/-/g, ""); //20201029
      expect(result.request.hostname).to.eql(`${requestRoute}.s3-object-lambda.us-east-1.amazonaws.com`);
      expect(result.request.headers["authorization"]).contains(
        `Credential=${credentials.accessKeyId}/${date}/${region}/s3-object-lambda/aws4_request`
      );
    });
  });
});

describe("Throw 200 response", () => {
  const response = {
    statusCode: 200,
    headers: {},
    body: new PassThrough(),
  };

  const client = new S3({
    region: "us-west-2",
    requestHandler: {
      handle: async () => ({
        response,
      }),
    },
  });

  const params = {
    Bucket: "bucket",
    Key: "key",
    CopySource: "source",
  };

  describe("when response body is empty", () => {
    const errorMsg = "S3 aborted request";

    beforeEach(() => {
      response.body = new PassThrough();
      response.body.end("");
    });

    it("should throw if CopyObject() return with 200 and empty payload", async () => {
      return expect(client.copyObject(params)).to.eventually.be.rejectedWith(errorMsg);
    });

    it("should throw if UploadPartCopy() return with 200 and empty payload", async () => {
      return expect(client.uploadPartCopy({ ...params, UploadId: "id", PartNumber: 1 })).to.eventually.be.rejectedWith(
        errorMsg
      );
    });

    it("should throw if CompleteMultipartUpload() return with 200 and empty payload", async () => {
      return expect(client.completeMultipartUpload({ ...params, UploadId: "id" })).to.eventually.be.rejectedWith(
        errorMsg
      );
    });
  });

  describe("when response body is an error", () => {
    const errorMsg = "We encountered an internal error. Please try again.";

    beforeEach(() => {
      response.body = new PassThrough();
      response.body.end(`<?xml version="1.0" encoding="UTF-8"?>
      <Error>
        <Code>InternalError</Code>
        <Message>We encountered an internal error. Please try again.</Message>
        <RequestId>656c76696e6727732072657175657374</RequestId>
        <HostId>Uuag1LuByRx9e6j5Onimru9pO4ZVKnJ2Qz7/C1NPcfTWAtRPfTaOFg==</HostId>
      </Error>`);
    });

    it("should throw if CopyObject() return with 200 and error preamble", async () => {
      return expect(client.copyObject(params)).to.eventually.be.rejectedWith(errorMsg);
    });

    it("should throw if UploadPartCopy() return with 200 and error preamble", async () => {
      return expect(client.uploadPartCopy({ ...params, UploadId: "id", PartNumber: 1 })).to.eventually.be.rejectedWith(
        errorMsg
      );
    });

    it("should throw if CompleteMultipartUpload() return with 200 and error preamble", async () => {
      return expect(client.completeMultipartUpload({ ...params, UploadId: "id" })).to.eventually.be.rejectedWith(
        errorMsg
      );
    });
  });
});

describe("regional endpoints", () => {
  const endpointValidator: FinalizeRequestMiddleware<any, any> = (next, context) => (args) => {
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

  it("should use regional endpoints if region is us-east-1", async () => {
    const client = new S3({ region: "us-east-1" });
    client.middlewareStack.add(endpointValidator, { step: "finalizeRequest", priority: "low" });
    const result: any = await client.putObject({
      Bucket: "bucket",
      Key: "key",
      Body: "body",
    });
    expect(result.request.hostname).to.eql("bucket.s3.us-east-1.amazonaws.com");
  });

  it("should use global endpoints if region is aws-global", async () => {
    const client = new S3({ region: "aws-global" });
    client.middlewareStack.add(endpointValidator, { step: "finalizeRequest", priority: "low" });
    const result: any = await client.putObject({
      Bucket: "bucket",
      Key: "key",
      Body: "body",
    });
    expect(result.request.hostname).to.eql("bucket.s3.amazonaws.com");
  });
});
