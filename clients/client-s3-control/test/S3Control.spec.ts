/// <reference types="mocha" />
import { FinalizeRequestMiddleware } from "@aws-sdk/types";
import { expect } from "chai";

import { S3Control } from "../src/S3Control";

describe("S3Control Client", () => {
  // Middleware intercept request and return it before reaching the HTTP client. It records the request and context
  // and return them in the Metadata.
  const interceptionMiddleware: FinalizeRequestMiddleware<any, any> = (next, context) => (args) => {
    return Promise.resolve({ output: { $metadata: { request: args.request, context } }, response: "" as any });
  };
  const region = "us-east-1";
  const credentials = { accessKeyId: "AKID", secretAccessKey: "SECRET" };
  const s3Control = new S3Control({ region, credentials });
  s3Control.middlewareStack.add(interceptionMiddleware, { step: "finalizeRequest", name: "interceptionMiddleware" });
  const HEADER_OUTPOST_ID = "x-amz-outpost-id";
  const HEADER_ACCOUNT_ID = "x-amz-account-id";
  const dateStr = new Date().toISOString().slice(0, 10).replace(/[\-:]/g, "");

  describe("CreateBucket", () => {
    it("should populate correct endpoint and signing region", async () => {
      const {
        // @ts-ignore request is set in $metadata by interception middleware.
        $metadata: { request },
      } = await s3Control.createBucket({ Bucket: "Bucket" });
      expect(request.hostname).eql(`s3-control.${region}.amazonaws.com`);
      expect(request.headers["authorization"]).contains(
        `Credential=${credentials.accessKeyId}/${dateStr}/${region}/s3/aws4_request`
      );
    });

    it("should populate correct endpoint and signing region if OutpostId is supplied", async () => {
      const OutpostId = "123456789012";
      const {
        // @ts-ignore request is set in $metadata by interception middleware.
        $metadata: { request },
      } = await s3Control.createBucket({ Bucket: "Bucket", OutpostId });
      expect(request.hostname).eql(`s3-outposts.${region}.amazonaws.com`);

      expect(request.headers[HEADER_OUTPOST_ID]).eql(OutpostId);
      expect(request.headers["authorization"]).contains(
        `Credential=${credentials.accessKeyId}/${dateStr}/${region}/s3-outposts/aws4_request`
      );
    });
  });

  describe("ListRegionalBuckets", () => {
    const AccountId = "123456789012";
    it("should populate correct endpoint and signing region", async () => {
      const {
        // @ts-ignore request is set in $metadata by interception middleware.
        $metadata: { request },
      } = await s3Control.listRegionalBuckets({ AccountId });
      expect(request.hostname).eql(`${AccountId}.s3-control.${region}.amazonaws.com`);
      expect(request.headers["authorization"]).contains(
        `Credential=${credentials.accessKeyId}/${dateStr}/${region}/s3/aws4_request`
      );
    });

    it("should populate correct endpoint and signing region if OutpostId is supplied", async () => {
      const OutpostId = "123456789012";
      const {
        // @ts-ignore request is set in $metadata by interception middleware.
        $metadata: { request },
      } = await s3Control.listRegionalBuckets({ AccountId, OutpostId });
      expect(request.hostname).contains(`s3-outposts.${region}.amazonaws.com`);
      expect(request.headers[HEADER_OUTPOST_ID]).eql(OutpostId);
      expect(request.headers[HEADER_ACCOUNT_ID]).eql(AccountId);
      expect(request.headers["authorization"]).contains(
        `Credential=${credentials.accessKeyId}/${dateStr}/${region}/s3-outposts/aws4_request`
      );
    });
  });

  // Use GetAccessPointCommand to validate the customizations for Access Point ARN customizations
  describe("Outposts Access Point ARN", () => {
    const AccountId = "123456789012";
    const OutpostId = "op-01234567890123456";
    const accesspointArn = `arn:aws:s3-outposts:${region}:${AccountId}:outpost:${OutpostId}:accesspoint:myaccesspoint`;
    it("should populate correct endpoint if Access Point name is non-ARN", async () => {
      const {
        // @ts-ignore request is set in $metadata by interception middleware.
        $metadata: { request },
      } = await s3Control.getAccessPoint({ Name: "FakeAccessPoint", AccountId });
      expect(request.hostname).eql(`${AccountId}.s3-control.${region}.amazonaws.com`);
      expect(request.headers["authorization"]).contains(
        `Credential=${credentials.accessKeyId}/${dateStr}/${region}/s3/aws4_request`
      );
    });

    it("should populate correct endpoint and signing region if Access Point name is ARN", async () => {
      const {
        // @ts-ignore request is set in $metadata by interception middleware.
        $metadata: { request },
      } = await s3Control.getAccessPoint({ Name: accesspointArn, AccountId });

      expect(request.hostname).eql(`s3-outposts.${region}.amazonaws.com`);
      expect(request.headers[HEADER_OUTPOST_ID]).eql(OutpostId);
      expect(request.headers[HEADER_ACCOUNT_ID]).eql(AccountId);
      expect(request.headers["authorization"]).contains(
        `Credential=${credentials.accessKeyId}/${dateStr}/${region}/s3/aws4_request`
      );
    });
  });

  // Use GetBucketCommand to validate the customizations for Bucket ARN customizations
  describe("Outposts Bucket ARN", () => {
    const AccountId = "123456789012";
    const OutpostId = "op-01234567890123456";
    const bucketArn = `arn:aws:s3-outposts:${region}:${AccountId}:outpost/${OutpostId}/bucket/bucket-id"`;
    it("should populate correct endpoint if Bucket name is non-ARN", async () => {
      const {
        // @ts-ignore request is set in $metadata by interception middleware.
        $metadata: { request },
      } = await s3Control.getBucket({ Bucket: "BucketName", AccountId });
      expect(request.hostname).eql(`${AccountId}.s3-control.${region}.amazonaws.com`);
      expect(request.headers["authorization"]).contains(
        `Credential=${credentials.accessKeyId}/${dateStr}/${region}/s3/aws4_request`
      );
    });

    it("should populate correct endpoint and signing region if Bucket name is ARN", async () => {
      const {
        // @ts-ignore request is set in $metadata by interception middleware.
        $metadata: { request },
      } = await s3Control.getBucket({ Bucket: bucketArn });

      expect(request.hostname).eql(`s3-outposts.${region}.amazonaws.com`);
      expect(request.headers[HEADER_OUTPOST_ID]).eql(OutpostId);
      expect(request.headers[HEADER_ACCOUNT_ID]).eql(AccountId);
      expect(request.headers["authorization"]).contains(
        `Credential=${credentials.accessKeyId}/${dateStr}/${region}/s3/aws4_request`
      );
    });
  });
});
