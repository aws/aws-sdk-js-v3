import { HttpRequest } from "@aws-sdk/protocol-http";
import { BuildHandlerArguments } from "@aws-sdk/types";

import { PreviouslyResolved } from "./configuration";
import { ChecksumAlgorithm } from "./constants";
import { flexibleChecksumsMiddleware } from "./flexibleChecksumsMiddleware";
import { getChecksum } from "./getChecksum";
import { getChecksumAlgorithmForRequest } from "./getChecksumAlgorithmForRequest";
import { getChecksumLocationName } from "./getChecksumLocationName";
import { FlexibleChecksumsMiddlewareConfig } from "./getFlexibleChecksumsPlugin";
import { hasHeader } from "./hasHeader";
import { isStreaming } from "./isStreaming";
import { selectChecksumAlgorithmFunction } from "./selectChecksumAlgorithmFunction";
import { validateChecksumFromResponse } from "./validateChecksumFromResponse";

jest.mock("@aws-sdk/protocol-http");
jest.mock("./getChecksum");
jest.mock("./getChecksumAlgorithmForRequest");
jest.mock("./getChecksumLocationName");
jest.mock("./hasHeader");
jest.mock("./isStreaming");
jest.mock("./validateChecksumFromResponse");
jest.mock("./selectChecksumAlgorithmFunction");

describe(flexibleChecksumsMiddleware.name, () => {
  const mockNext = jest.fn();

  const mockChecksum = "mockChecksum";
  const mockChecksumAlgorithmFunction = jest.fn();
  const mockChecksumLocationName = "mock-checksum-location-name";

  const mockInput = {};
  const mockConfig = {} as PreviouslyResolved;
  const mockMiddlewareConfig = { input: mockInput, requestChecksumRequired: false };

  const mockBody = { body: "mockRequestBody" };
  const mockHeaders = { "content-length": 100 };
  const mockRequest = { body: mockBody, headers: mockHeaders };
  const mockArgs = { request: mockRequest } as BuildHandlerArguments<any>;
  const mockResult = { response: { body: "mockResponsebody" } };

  beforeEach(() => {
    mockNext.mockResolvedValueOnce(mockResult);
    const { isInstance } = HttpRequest;
    (isInstance as unknown as jest.Mock).mockReturnValue(true);
    (getChecksum as jest.Mock).mockReturnValue(mockChecksum);
    (getChecksumAlgorithmForRequest as jest.Mock).mockReturnValue(ChecksumAlgorithm.MD5);
    (getChecksumLocationName as jest.Mock).mockReturnValue(mockChecksumLocationName);
    (hasHeader as jest.Mock).mockReturnValue(false);
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
        expect(getChecksum).not.toHaveBeenCalled();
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
        (hasHeader as jest.Mock).mockReturnValue(true);
        await handler(mockArgsWithChecksumHeader);
        expect(getChecksumLocationName).toHaveBeenCalledTimes(1);
        expect(selectChecksumAlgorithmFunction).toHaveBeenCalledTimes(1);
        expect(hasHeader).toHaveBeenCalledTimes(1);
        expect(mockNext).toHaveBeenCalledWith(mockArgsWithChecksumHeader);
        expect(hasHeader).toHaveBeenCalledWith(mockChecksumLocationName, mockHeadersWithChecksumHeader);
      });
    });

    describe("response validation", () => {
      it("if requestValidationModeMember is not defined", async () => {
        const handler = flexibleChecksumsMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, {});
        await handler(mockArgs);
        expect(validateChecksumFromResponse).not.toHaveBeenCalled();
      });

      it("if requestValidationModeMember is not set to 'ENABLED' in input", async () => {
        const mockRequestValidationModeMember = "mockRequestValidationModeMember";
        const handler = flexibleChecksumsMiddleware(mockConfig, {
          ...mockMiddlewareConfig,
          requestValidationModeMember: mockRequestValidationModeMember,
        })(mockNext, {});
        await handler(mockArgs);
        expect(validateChecksumFromResponse).not.toHaveBeenCalled();
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
      const mockGetAwsChunkedEncodingStream = jest.fn().mockReturnValue(mockUpdatedBody);

      const handler = flexibleChecksumsMiddleware(
        { ...mockConfig, getAwsChunkedEncodingStream: mockGetAwsChunkedEncodingStream },
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
            "content-encoding": "aws-chunked",
            "transfer-encoding": "chunked",
            "x-amz-decoded-content-length": mockHeaders["content-length"],
            "x-amz-content-sha256": "STREAMING-UNSIGNED-PAYLOAD-TRAILER",
            "x-amz-trailer": mockChecksumLocationName,
          },
          body: mockUpdatedBody,
        },
      });
      expect(mockGetAwsChunkedEncodingStream).toHaveBeenCalledTimes(1);
    });

    it("for non-streaming body", async () => {
      const handler = flexibleChecksumsMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, {});
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
      expect(getChecksum).toHaveBeenCalledTimes(1);
    });
  });

  it("validates checksum from the response header", async () => {
    const mockRequestValidationModeMember = "mockRequestValidationModeMember";
    const mockInput = { [mockRequestValidationModeMember]: "ENABLED" };
    const mockResponseAlgorithms = ["ALGO1", "ALGO2"];

    const handler = flexibleChecksumsMiddleware(mockConfig, {
      ...mockMiddlewareConfig,
      input: mockInput,
      requestValidationModeMember: mockRequestValidationModeMember,
      responseAlgorithms: mockResponseAlgorithms,
    })(mockNext, {});

    await handler(mockArgs);
    expect(validateChecksumFromResponse).toHaveBeenCalledWith(mockResult.response, {
      config: mockConfig,
      responseAlgorithms: mockResponseAlgorithms,
    });
  });
});
