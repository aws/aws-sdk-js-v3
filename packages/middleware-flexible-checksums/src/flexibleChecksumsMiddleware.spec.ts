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
import { selectChecksumAlgorithmFunction } from "./selectChecksumAlgorithmFunction";
import { validateChecksumFromResponse } from "./validateChecksumFromResponse";

jest.mock("@aws-sdk/protocol-http");
jest.mock("./getChecksumAlgorithmForRequest");
jest.mock("./getChecksumLocationName");
jest.mock("./selectChecksumAlgorithmFunction");
jest.mock("./getChecksum");
jest.mock("./hasHeader");
jest.mock("./validateChecksumFromResponse");

describe(flexibleChecksumsMiddleware.name, () => {
  const mockNext = jest.fn();

  const mockChecksum = "mockChecksum";
  const mockChecksumAlgorithmFunction = jest.fn();
  const mockChecksumLocationName = "mock-checksum-location-name";

  const mockInput = {};
  const mockConfig = {} as PreviouslyResolved;
  const mockMiddlewareConfig = { input: mockInput } as FlexibleChecksumsMiddlewareConfig;

  const mockBody = {};
  const mockHeaders = {};
  const mockRequest = { body: mockBody, headers: mockHeaders };
  const mockArgs = { request: mockRequest } as BuildHandlerArguments<any>;
  const mockResult = { response: {} };

  beforeEach(() => {
    mockNext.mockResolvedValueOnce(mockResult);
    const { isInstance } = HttpRequest;
    (isInstance as unknown as jest.Mock).mockReturnValue(true);
    (getChecksumAlgorithmForRequest as jest.Mock).mockReturnValue(ChecksumAlgorithm.MD5);
    (getChecksumLocationName as jest.Mock).mockReturnValue(mockChecksumLocationName);
    (selectChecksumAlgorithmFunction as jest.Mock).mockReturnValue(mockChecksumAlgorithmFunction);
    (getChecksum as jest.Mock).mockReturnValue(mockChecksum);
    (hasHeader as jest.Mock).mockReturnValue(false);
  });

  afterEach(() => {
    expect(mockNext).toHaveBeenCalledTimes(1);
    jest.clearAllMocks();
  });

  describe("skips checksum computation", () => {
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
        expect(selectChecksumAlgorithmFunction).not.toHaveBeenCalled();
        expect(getChecksum).not.toHaveBeenCalled();
      });

      it("if checksumAlgorithm is not defined", async () => {
        (getChecksumAlgorithmForRequest as jest.Mock).mockReturnValue(undefined);
        const handler = flexibleChecksumsMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, {});
        await handler(mockArgs);
        expect(getChecksumLocationName).not.toHaveBeenCalled();
        expect(mockNext).toHaveBeenCalledWith(mockArgs);
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

  it("adds checksum in the request header", async () => {
    const handler = flexibleChecksumsMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, {});
    await handler(mockArgs);
    expect(getChecksumLocationName).toHaveBeenCalledTimes(1);
    expect(hasHeader).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledWith({
      ...mockArgs,
      request: {
        ...mockRequest,
        headers: { ...mockHeaders, [mockChecksumLocationName]: mockChecksum },
      },
    });
    expect(hasHeader).toHaveBeenCalledWith(mockChecksumLocationName, mockHeaders);
    expect(selectChecksumAlgorithmFunction).toHaveBeenCalledTimes(1);
    expect(getChecksum).toHaveBeenCalledTimes(1);
  });

  it("validates checksum from the response header", async () => {
    const mockRequestValidationModeMember = "mockRequestValidationModeMember";
    const mockInput = { [mockRequestValidationModeMember]: "ENABLED" };

    const handler = flexibleChecksumsMiddleware(mockConfig, {
      ...mockMiddlewareConfig,
      input: mockInput,
      requestValidationModeMember: mockRequestValidationModeMember,
    })(mockNext, {});

    await handler(mockArgs);
    expect(validateChecksumFromResponse).toHaveBeenCalledTimes(1);
  });
});
