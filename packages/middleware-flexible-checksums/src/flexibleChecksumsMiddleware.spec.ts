import { HttpRequest } from "@smithy/protocol-http";
import { BuildHandlerArguments } from "@smithy/types";

import { PreviouslyResolved } from "./configuration";
import { ChecksumAlgorithm, RequestChecksumCalculation } from "./constants";
import { flexibleChecksumsMiddleware } from "./flexibleChecksumsMiddleware";
import { getChecksumAlgorithmForRequest } from "./getChecksumAlgorithmForRequest";
import { getChecksumLocationName } from "./getChecksumLocationName";
import { hasHeader } from "./hasHeader";
import { isStreaming } from "./isStreaming";
import { selectChecksumAlgorithmFunction } from "./selectChecksumAlgorithmFunction";
import { stringHasher } from "./stringHasher";

jest.mock("@smithy/protocol-http");
jest.mock("./getChecksumAlgorithmForRequest");
jest.mock("./getChecksumLocationName");
jest.mock("./hasHeader");
jest.mock("./isStreaming");
jest.mock("./selectChecksumAlgorithmFunction");
jest.mock("./stringHasher");

describe(flexibleChecksumsMiddleware.name, () => {
  const mockNext = jest.fn();

  const mockChecksum = "mockChecksum";
  const mockChecksumAlgorithmFunction = jest.fn();
  const mockChecksumLocationName = "mock-checksum-location-name";

  const mockInput = {};
  const mockConfig = {
    requestChecksumCalculation: () => Promise.resolve(RequestChecksumCalculation.WHEN_REQUIRED),
  } as PreviouslyResolved;
  const mockMiddlewareConfig = { input: mockInput, requestChecksumRequired: false };

  const mockBody = { body: "mockRequestBody" };
  const mockHeaders = { "content-length": 100, "content-encoding": "gzip" };
  const mockRequest = { body: mockBody, headers: mockHeaders };
  const mockArgs = { request: mockRequest } as BuildHandlerArguments<any>;
  const mockResult = { response: { body: "mockResponsebody" } };

  beforeEach(() => {
    mockNext.mockResolvedValueOnce(mockResult);
    const { isInstance } = HttpRequest;
    (isInstance as unknown as jest.Mock).mockReturnValue(true);
    (getChecksumAlgorithmForRequest as jest.Mock).mockReturnValue(ChecksumAlgorithm.MD5);
    (getChecksumLocationName as jest.Mock).mockReturnValue(mockChecksumLocationName);
    (hasHeader as jest.Mock).mockReturnValue(true);
    (isStreaming as jest.Mock).mockReturnValue(false);
    (selectChecksumAlgorithmFunction as jest.Mock).mockReturnValue(mockChecksumAlgorithmFunction);
  });

  afterEach(() => {
    expect(mockNext).toHaveBeenCalledTimes(1);
    jest.clearAllMocks();
  });

  describe("skips", () => {
    it("if not an instance of HttpRequest", async () => {
      const { isInstance } = HttpRequest;
      (isInstance as unknown as jest.Mock).mockReturnValue(false);
      const handler = flexibleChecksumsMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, {});
      await handler(mockArgs);
      expect(getChecksumAlgorithmForRequest).not.toHaveBeenCalled();
    });

    describe("request checksum", () => {
      afterEach(() => {
        expect(getChecksumAlgorithmForRequest).toHaveBeenCalledTimes(1);
      });

      it("if checksumAlgorithm is not defined", async () => {
        (getChecksumAlgorithmForRequest as jest.Mock).mockReturnValue(undefined);
        const handler = flexibleChecksumsMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, {});
        await handler(mockArgs);
        expect(getChecksumLocationName).not.toHaveBeenCalled();
        expect(mockNext).toHaveBeenCalledWith(mockArgs);
        expect(selectChecksumAlgorithmFunction).not.toHaveBeenCalled();
      });

      it("if header is already present", async () => {
        const handler = flexibleChecksumsMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, {});
        const mockHeadersWithChecksumHeader = { ...mockHeaders, [mockChecksumLocationName]: "mockHeaderValue" };
        const mockArgsWithChecksumHeader = {
          ...mockArgs,
          request: { ...mockRequest, headers: mockHeadersWithChecksumHeader },
        };
        await handler(mockArgsWithChecksumHeader);
        expect(getChecksumLocationName).toHaveBeenCalledWith(ChecksumAlgorithm.MD5);
        expect(selectChecksumAlgorithmFunction).toHaveBeenCalledWith(ChecksumAlgorithm.MD5, mockConfig);
        expect(mockNext).toHaveBeenCalledWith(mockArgsWithChecksumHeader);
        expect(hasHeader).toHaveBeenCalledWith(mockChecksumLocationName, mockHeadersWithChecksumHeader);
      });
    });
  });

  describe("adds checksum in the request header", () => {
    afterEach(() => {
      expect(getChecksumAlgorithmForRequest).toHaveBeenCalledTimes(1);
      expect(getChecksumLocationName).toHaveBeenCalledTimes(1);
      expect(selectChecksumAlgorithmFunction).toHaveBeenCalledTimes(1);
    });

    it("for streaming body", async () => {
      (isStreaming as jest.Mock).mockReturnValue(true);
      const mockUpdatedBody = { body: "mockUpdatedBody" };

      const mockBase64Encoder = jest.fn();
      const mockStreamHasher = jest.fn();
      const mockBodyLengthChecker = jest.fn();
      const mockGetAwsChunkedEncodingStream = jest.fn().mockReturnValue(mockUpdatedBody);

      const handler = flexibleChecksumsMiddleware(
        {
          ...mockConfig,
          base64Encoder: mockBase64Encoder,
          bodyLengthChecker: mockBodyLengthChecker,
          getAwsChunkedEncodingStream: mockGetAwsChunkedEncodingStream,
          streamHasher: mockStreamHasher,
        },
        mockMiddlewareConfig
      )(mockNext, {});
      await handler(mockArgs);

      expect(mockNext).toHaveBeenCalledWith({
        ...mockArgs,
        request: {
          ...mockRequest,
          headers: {
            ...mockHeaders,
            "content-length": undefined,
            "content-encoding": "gzip,aws-chunked",
            "transfer-encoding": "chunked",
            "x-amz-decoded-content-length": mockHeaders["content-length"],
            "x-amz-content-sha256": "STREAMING-UNSIGNED-PAYLOAD-TRAILER",
            "x-amz-trailer": mockChecksumLocationName,
          },
          body: mockUpdatedBody,
        },
      });
      expect(mockGetAwsChunkedEncodingStream).toHaveBeenCalledWith(mockRequest.body, {
        base64Encoder: mockBase64Encoder,
        bodyLengthChecker: mockBodyLengthChecker,
        checksumLocationName: mockChecksumLocationName,
        checksumAlgorithmFn: mockChecksumAlgorithmFunction,
        streamHasher: mockStreamHasher,
      });
    });

    it("for non-streaming body", async () => {
      const mockRawChecksum = Buffer.from(mockChecksum);
      const mockBase64Encoder = jest.fn().mockReturnValue(mockChecksum);
      (stringHasher as jest.Mock).mockResolvedValue(mockRawChecksum);
      (hasHeader as jest.Mock).mockReturnValue(false);

      const handler = flexibleChecksumsMiddleware(
        { ...mockConfig, base64Encoder: mockBase64Encoder },
        mockMiddlewareConfig
      )(mockNext, {});
      await handler(mockArgs);
      expect(hasHeader).toHaveBeenCalledTimes(1);
      expect(mockNext).toHaveBeenCalledWith({
        ...mockArgs,
        request: {
          ...mockRequest,
          headers: { ...mockHeaders, [mockChecksumLocationName]: mockChecksum },
        },
      });
      expect(hasHeader).toHaveBeenCalledWith(mockChecksumLocationName, mockHeaders);
      expect(stringHasher).toHaveBeenCalledWith(mockChecksumAlgorithmFunction, mockRequest.body);
      expect(mockBase64Encoder).toHaveBeenCalledWith(mockRawChecksum);
    });
  });
});
