import { HttpRequest } from "@smithy/protocol-http";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { resolveBucketEndpointConfig } from "./configurations";

const mockBucketArn = "an ARN structure";

vi.mock("./bucketHostname", () => ({
  bucketHostname: vi.fn(),
}));

vi.mock("@aws-sdk/util-arn-parser", () => ({
  parse: vi.fn().mockReturnValue("an ARN structure"),
  validate: vi.fn(),
}));

import { parse, validate } from "@aws-sdk/util-arn-parser";

import { bucketEndpointMiddleware } from "./bucketEndpointMiddleware";
import { bucketHostname } from "./bucketHostname";

/**
 * @deprecated unused as of EndpointsV2.
 */
describe.skip("bucketEndpointMiddleware", () => {
  const input = { Bucket: "bucket" };
  const mockRegion = "us-foo-1";
  const requestInput = {
    method: "GET",
    headers: {},
    protocol: "https:",
    hostname: "s3.us-west-2.amazonaws.com",
    path: "/bucket",
  };
  const next = vi.fn();
  const previouslyResolvedConfig = {
    isCustomEndpoint: false,
    region: vi.fn().mockResolvedValue(mockRegion),
    regionInfoProvider: vi
      .fn()
      .mockResolvedValue({ hostname: "foo.us-foo-2.amazonaws.com", partition: "aws-foo", signingRegion: mockRegion }),
    useArnRegion: vi.fn().mockResolvedValue(false),
    useFipsEndpoint: () => Promise.resolve(false),
    useDualstackEndpoint: () => Promise.resolve(false),
  };

  afterEach(() => {
    vi.mocked(validate).mockClear();
    vi.mocked(bucketHostname).mockClear();
  });

  describe("with regular bucket name", () => {
    beforeEach(() => {
      vi.mocked(bucketHostname).mockReturnValue({
        bucketEndpoint: true,
        hostname: "bucket.s3.us-west-2.amazonaws.com",
      });
    });

    it("should supply default parameters to bucket hostname constructor", async () => {
      const request = new HttpRequest(requestInput);
      vi.mocked(validate).mockReturnValue(false);
      const handler = bucketEndpointMiddleware(
        resolveBucketEndpointConfig({
          ...previouslyResolvedConfig,
        })
      )(next, {} as any);
      await handler({ input, request });
      expect(vi.mocked(bucketHostname)).toBeCalled();
      const param = vi.mocked(bucketHostname).mock.calls[0][0];
      expect(param).toEqual({
        bucketName: input.Bucket,
        baseHostname: requestInput.hostname,
        clientRegion: mockRegion,
        accelerateEndpoint: false,
        fipsEndpoint: false,
        dualstackEndpoint: false,
        pathStyleEndpoint: false,
        tlsCompatible: true,
        isCustomEndpoint: false,
      });
    });

    it("should relay parameters to bucket hostname constructor", async () => {
      const request = new HttpRequest({ ...requestInput, protocol: "http:" });
      vi.mocked(validate).mockReturnValue(false);
      const handler = bucketEndpointMiddleware(
        resolveBucketEndpointConfig({
          ...previouslyResolvedConfig,
          useAccelerateEndpoint: true,
          useDualstackEndpoint: () => Promise.resolve(true),
          forcePathStyle: true,
          isCustomEndpoint: true,
        })
      )(next, {} as any);
      await handler({ input, request });
      expect(vi.mocked(bucketHostname)).toBeCalled();
      const param = vi.mocked(bucketHostname).mock.calls[0][0];
      expect(param).toEqual({
        bucketName: input.Bucket,
        baseHostname: requestInput.hostname,
        clientRegion: mockRegion,
        accelerateEndpoint: true,
        dualstackEndpoint: true,
        fipsEndpoint: false,
        pathStyleEndpoint: true,
        tlsCompatible: false,
        isCustomEndpoint: true,
      });
    });
  });

  describe("allows bucket name to be an ARN", () => {
    beforeEach(() => {
      vi.mocked(validate).mockReturnValue(true);
      vi.mocked(bucketHostname).mockReturnValue({
        bucketEndpoint: true,
        hostname: "myendpoint-123456789012.s3-accesspoint.us-west-2.amazonaws.com",
      });
    });

    it("should relay parameters to bucket hostname constructor", async () => {
      const request = new HttpRequest(requestInput);
      const handler = bucketEndpointMiddleware(
        resolveBucketEndpointConfig({
          ...previouslyResolvedConfig,
        })
      )(next, {} as any);
      await handler({
        input: { Bucket: "myendpoint-123456789012.s3-accesspoint.us-west-2.amazonaws.com" },
        request,
      });
      expect(vi.mocked(bucketHostname)).toBeCalled();
      const param = vi.mocked(bucketHostname).mock.calls[0][0];
      expect(param).toEqual({
        bucketName: mockBucketArn,
        baseHostname: requestInput.hostname,
        clientRegion: mockRegion,
        accelerateEndpoint: false,
        fipsEndpoint: false,
        dualstackEndpoint: false,
        pathStyleEndpoint: false,
        tlsCompatible: true,
        clientPartition: "aws-foo",
        clientSigningRegion: mockRegion,
        useArnRegion: false,
        isCustomEndpoint: false,
        disableMultiregionAccessPoints: false,
      });
      expect(previouslyResolvedConfig.region).toBeCalled();
      expect(previouslyResolvedConfig.regionInfoProvider).toBeCalled();
      expect(previouslyResolvedConfig.useArnRegion).toBeCalled();
    });

    it("should get client partition and signing region with pseudo region", async () => {
      const request = new HttpRequest(requestInput);
      const handler = bucketEndpointMiddleware(
        resolveBucketEndpointConfig({
          ...previouslyResolvedConfig,
          region: () => Promise.resolve("fips-us-foo-1"),
        })
      )(next, {} as any);
      await handler({
        input: { Bucket: "myendpoint-123456789012.s3-accesspoint.us-west-2.amazonaws.com" },
        request,
      });
      expect(previouslyResolvedConfig.regionInfoProvider).toBeCalled();
      expect(previouslyResolvedConfig.regionInfoProvider.mock.calls[0][0]).toBe(mockRegion);
    });

    it("should supply bucketHostname in ARN object if bucket name string is a valid ARN", async () => {
      const request = new HttpRequest(requestInput);
      const handler = bucketEndpointMiddleware(
        resolveBucketEndpointConfig({
          ...previouslyResolvedConfig,
        })
      )(next, {} as any);
      await handler({
        input: { Bucket: "myendpoint-123456789012.s3-accesspoint.us-west-2.amazonaws.com" },
        request,
      });
      expect(vi.mocked(bucketHostname)).toBeCalled();
      expect(vi.mocked(bucketHostname).mock.calls[0][0].bucketName).toBe(mockBucketArn);
      expect(vi.mocked(parse)).toBeCalled();
      expect(vi.mocked(validate)).toBeCalled();
    });

    it("should set signing_region to middleware context if the request will use region from ARN", async () => {
      vi.mocked(bucketHostname).mockReturnValue({
        bucketEndpoint: true,
        hostname: "myendpoint-123456789012.s3-accesspoint.us-west-2.amazonaws.com",
        signingService: "s3-foo",
        signingRegion: "us-bar-1",
      });
      const request = new HttpRequest(requestInput);
      previouslyResolvedConfig.useArnRegion.mockReturnValue(true);
      const handlerContext = {} as any;
      const handler = bucketEndpointMiddleware(
        resolveBucketEndpointConfig({
          ...previouslyResolvedConfig,
        })
      )(next, handlerContext);
      await handler({
        input: { Bucket: "Bucket" },
        request,
      });
      expect(handlerContext).toMatchObject({ signing_region: "us-bar-1", signing_service: "s3-foo" });
    });
  });
});
