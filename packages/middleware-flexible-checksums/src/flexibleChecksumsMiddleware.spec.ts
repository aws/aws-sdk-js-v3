import { HttpRequest } from "@smithy/protocol-http";
import { BuildHandlerArguments } from "@smithy/types";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { PreviouslyResolved } from "./configuration";
import { ChecksumAlgorithm, DEFAULT_CHECKSUM_ALGORITHM, RequestChecksumCalculation } from "./constants";
import { flexibleChecksumsMiddleware } from "./flexibleChecksumsMiddleware";
import { getChecksumAlgorithmForRequest } from "./getChecksumAlgorithmForRequest";
import { getChecksumLocationName } from "./getChecksumLocationName";
import { hasHeader } from "./hasHeader";
import { hasHeaderWithPrefix } from "./hasHeaderWithPrefix";
import { isStreaming } from "./isStreaming";
import { selectChecksumAlgorithmFunction } from "./selectChecksumAlgorithmFunction";
import { stringHasher } from "./stringHasher";

vi.mock("@aws-sdk/core");
vi.mock("@smithy/protocol-http");
vi.mock("./getChecksumAlgorithmForRequest");
vi.mock("./getChecksumLocationName");
vi.mock("./hasHeader");
vi.mock("./hasHeaderWithPrefix");
vi.mock("./isStreaming");
vi.mock("./selectChecksumAlgorithmFunction");
vi.mock("./stringHasher");

describe(flexibleChecksumsMiddleware.name, () => {
  const mockNext = vi.fn();

  const mockChecksum = "mockChecksum";
  const mockChecksumAlgorithmFunction = vi.fn();
  const mockChecksumLocationName = "mock-checksum-location-name";

  const mockInput = {};
  const mockConfig = {
    requestChecksumCalculation: () => Promise.resolve(RequestChecksumCalculation.WHEN_REQUIRED),
  } as PreviouslyResolved;
  const mockMiddlewareConfig = { requestChecksumRequired: false };

  const mockBody = { body: "mockRequestBody" };
  const mockHeaders = { "content-length": 100, "content-encoding": "gzip" };
  const mockRequest = { body: mockBody, headers: mockHeaders };
  const mockArgs = { input: mockInput, request: mockRequest } as BuildHandlerArguments<any>;
  const mockResult = { response: { body: "mockResponsebody" } };

  beforeEach(() => {
    mockNext.mockResolvedValueOnce(mockResult);
    vi.mocked(HttpRequest.isInstance).mockReturnValue(true);
    vi.mocked(getChecksumAlgorithmForRequest).mockReturnValue(ChecksumAlgorithm.CRC32);
    vi.mocked(getChecksumLocationName).mockReturnValue(mockChecksumLocationName);
    vi.mocked(hasHeader).mockReturnValue(true);
    vi.mocked(hasHeaderWithPrefix).mockReturnValue(false);
    vi.mocked(isStreaming).mockReturnValue(false);
    vi.mocked(selectChecksumAlgorithmFunction).mockReturnValue(mockChecksumAlgorithmFunction);
  });

  afterEach(() => {
    expect(mockNext).toHaveBeenCalledTimes(1);
    vi.clearAllMocks();
  });

  describe("skips", () => {
    it("if not an instance of HttpRequest", async () => {
      vi.mocked(HttpRequest.isInstance).mockReturnValue(false);
      const handler = flexibleChecksumsMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, {});
      await handler(mockArgs);
      expect(getChecksumAlgorithmForRequest).not.toHaveBeenCalled();
    });

    describe("request checksum", () => {
      it("if checksumAlgorithm is not defined", async () => {
        vi.mocked(getChecksumAlgorithmForRequest).mockReturnValue(undefined);
        const handler = flexibleChecksumsMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, {});
        await handler(mockArgs);
        expect(hasHeaderWithPrefix).toHaveBeenCalledTimes(1);
        expect(getChecksumLocationName).not.toHaveBeenCalled();
        expect(mockNext).toHaveBeenCalledWith(mockArgs);
        expect(selectChecksumAlgorithmFunction).not.toHaveBeenCalled();
        expect(getChecksumAlgorithmForRequest).toHaveBeenCalledTimes(1);
      });

      describe("skip if header is already present", async () => {
        beforeEach(() => {
          vi.mocked(hasHeaderWithPrefix).mockReturnValue(true);
        });

        afterEach(() => {
          expect(hasHeaderWithPrefix).toHaveBeenCalledTimes(1);
          expect(getChecksumLocationName).not.toHaveBeenCalled();
          expect(selectChecksumAlgorithmFunction).not.toHaveBeenCalled();
          expect(hasHeader).not.toHaveBeenCalled();
        });

        it("with no changes input", async () => {
          const handler = flexibleChecksumsMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, {});

          await handler(mockArgs);
          expect(mockNext).toHaveBeenCalledWith(mockArgs);
        });

        describe("handles input[requestAlgorithmMember]", () => {
          it("removes if respective checksum header is not present", async () => {
            const mockRequestAlgorithmMember = "mockRequestAlgorithmMember";
            const handler = flexibleChecksumsMiddleware(mockConfig, {
              ...mockMiddlewareConfig,
              requestAlgorithmMember: mockRequestAlgorithmMember,
            })(mockNext, {});

            const mockArgsWithInput = {
              ...mockArgs,
              input: { [mockRequestAlgorithmMember]: DEFAULT_CHECKSUM_ALGORITHM },
            };
            await handler(mockArgsWithInput);
            expect(mockNext).toHaveBeenCalledWith(mockArgs);
            expect(mockNext.mock.calls[0][0].input[mockRequestAlgorithmMember]).toBeUndefined();
          });

          // This means user set the checksum algorithm, as well as the actual checksum.
          it("retains if respective checksum header is present", async () => {
            const mockRequestAlgorithmMember = "mockRequestAlgorithmMember";
            const handler = flexibleChecksumsMiddleware(mockConfig, {
              ...mockMiddlewareConfig,
              requestAlgorithmMember: mockRequestAlgorithmMember,
            })(mockNext, {});

            const mockArgsWithInputAndRequest = {
              ...mockArgs,
              input: { [mockRequestAlgorithmMember]: DEFAULT_CHECKSUM_ALGORITHM },
              request: {
                ...mockRequest,
                headers: {
                  ...mockHeaders,
                  [`x-amz-checksum-${DEFAULT_CHECKSUM_ALGORITHM.toLowerCase()}`]: mockChecksum,
                },
              },
            };
            await handler(mockArgsWithInputAndRequest);
            expect(mockNext).toHaveBeenCalledWith(mockArgsWithInputAndRequest);
            expect(mockNext.mock.calls[0][0].input[mockRequestAlgorithmMember]).toBe(DEFAULT_CHECKSUM_ALGORITHM);
          });
        });
      });
    });
  });

  describe("adds checksum in the request header", () => {
    afterEach(() => {
      expect(HttpRequest.isInstance).toHaveBeenCalledTimes(1);
      expect(hasHeaderWithPrefix).toHaveBeenCalledTimes(1);
      expect(getChecksumAlgorithmForRequest).toHaveBeenCalledTimes(1);
      expect(getChecksumLocationName).toHaveBeenCalledTimes(1);
      expect(selectChecksumAlgorithmFunction).toHaveBeenCalledTimes(1);
    });

    it("for streaming body", async () => {
      vi.mocked(isStreaming).mockReturnValue(true);
      const mockUpdatedBody = { body: "mockUpdatedBody" };

      const mockBase64Encoder = vi.fn();
      const mockStreamHasher = vi.fn();
      const mockBodyLengthChecker = vi.fn();
      const mockGetAwsChunkedEncodingStream = vi.fn().mockReturnValue(mockUpdatedBody);

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
      const mockBase64Encoder = vi.fn().mockReturnValue(mockChecksum);
      vi.mocked(stringHasher).mockResolvedValue(mockRawChecksum);
      vi.mocked(hasHeader).mockReturnValue(false);

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
