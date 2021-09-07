import { HttpRequest } from "@aws-sdk/protocol-http";

import { resolveBucketEndpointConfig } from "./configurations";

const mockBucketHostname = jest.fn();
jest.mock("./bucketHostname", () => ({
  bucketHostname: mockBucketHostname,
}));
const mockBucketArn = "an ARN structure";
const mockArnParse = jest.fn().mockReturnValue(mockBucketArn);
const mockArnValidation = jest.fn();
jest.mock("@aws-sdk/util-arn-parser", () => ({
  parse: mockArnParse,
  validate: mockArnValidation,
}));

import { bucketEndpointMiddleware } from "./bucketEndpointMiddleware";

describe("bucketEndpointMiddleware", () => {
  const input = { Bucket: "bucket" };
  const mockRegion = "us-foo-1";
  const requestInput = {
    method: "GET",
    headers: {},
    protocol: "https:",
    hostname: "s3.us-west-2.amazonaws.com",
    path: "/bucket",
  };
  const next = jest.fn();
  const previouslyResolvedConfig = {
    isCustomEndpoint: false,
    region: jest.fn().mockResolvedValue(mockRegion),
    regionInfoProvider: jest
      .fn()
      .mockResolvedValue({ hostname: "foo.us-foo-2.amazonaws.com", partition: "aws-foo", signingRegion: mockRegion }),
    useArnRegion: jest.fn().mockResolvedValue(false),
  };

  afterEach(() => {
    mockArnValidation.mockClear();
    mockBucketHostname.mockClear();
  });

  describe("with regular bucket name", () => {
    beforeEach(() => {
      mockBucketHostname.mockReturnValue({
        bucketEndpoint: true,
        hostname: "bucket.s3.us-west-2.amazonaws.com",
      });
    });

    it("should supply default parameters to bucket hostname constructor", async () => {
      const request = new HttpRequest(requestInput);
      mockArnValidation.mockReturnValue(false);
      const handler = bucketEndpointMiddleware(
        resolveBucketEndpointConfig({
          ...previouslyResolvedConfig,
        })
      )(next, {} as any);
      await handler({ input, request });
      expect(mockBucketHostname).toBeCalled();
      const param = mockBucketHostname.mock.calls[0][0];
      expect(param).toEqual({
        bucketName: input.Bucket,
        baseHostname: requestInput.hostname,
        clientRegion: mockRegion,
        accelerateEndpoint: false,
        dualstackEndpoint: false,
        pathStyleEndpoint: false,
        tlsCompatible: true,
        isCustomEndpoint: false,
      });
    });

    it("should relay parameters to bucket hostname constructor", async () => {
      const request = new HttpRequest({ ...requestInput, protocol: "http:" });
      mockArnValidation.mockReturnValue(false);
      const handler = bucketEndpointMiddleware(
        resolveBucketEndpointConfig({
          ...previouslyResolvedConfig,
          useAccelerateEndpoint: true,
          useDualstackEndpoint: true,
          forcePathStyle: true,
          isCustomEndpoint: true,
        })
      )(next, {} as any);
      await handler({ input, request });
      expect(mockBucketHostname).toBeCalled();
      const param = mockBucketHostname.mock.calls[0][0];
      expect(param).toEqual({
        bucketName: input.Bucket,
        baseHostname: requestInput.hostname,
        clientRegion: mockRegion,
        accelerateEndpoint: true,
        dualstackEndpoint: true,
        pathStyleEndpoint: true,
        tlsCompatible: false,
        isCustomEndpoint: true,
      });
    });
  });

  describe("allows bucket name to be an ARN", () => {
    beforeEach(() => {
      mockArnValidation.mockReturnValue(true);
      mockBucketHostname.mockReturnValue({
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
      expect(mockBucketHostname).toBeCalled();
      const param = mockBucketHostname.mock.calls[0][0];
      expect(param).toEqual({
        bucketName: mockBucketArn,
        baseHostname: requestInput.hostname,
        clientRegion: mockRegion,
        accelerateEndpoint: false,
        dualstackEndpoint: false,
        pathStyleEndpoint: false,
        tlsCompatible: true,
        clientPartition: "aws-foo",
        clientSigningRegion: mockRegion,
        useArnRegion: false,
        isCustomEndpoint: false,
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
      expect(mockBucketHostname).toBeCalled();
      expect(mockBucketHostname.mock.calls[0][0].bucketName).toBe(mockBucketArn);
      expect(mockArnParse).toBeCalled();
      expect(mockArnValidation).toBeCalled();
    });

    it("should set signing_region to middleware context if the request will use region from ARN", async () => {
      mockBucketHostname.mockReturnValue({
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
