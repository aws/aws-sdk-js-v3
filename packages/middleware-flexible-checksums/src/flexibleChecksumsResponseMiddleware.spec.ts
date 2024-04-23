import { HttpRequest } from "@smithy/protocol-http";
import { DeserializeHandlerArguments } from "@smithy/types";

import { PreviouslyResolved } from "./configuration";
import { ChecksumAlgorithm } from "./constants";
import { flexibleChecksumsResponseMiddleware } from "./flexibleChecksumsResponseMiddleware";
import { getChecksumLocationName } from "./getChecksumLocationName";
import { FlexibleChecksumsMiddlewareConfig } from "./getFlexibleChecksumsPlugin";
import { isChecksumWithPartNumber } from "./isChecksumWithPartNumber";
import { isStreaming } from "./isStreaming";
import { validateChecksumFromResponse } from "./validateChecksumFromResponse";

jest.mock("@smithy/protocol-http");
jest.mock("./isChecksumWithPartNumber");
jest.mock("./isStreaming");
jest.mock("./getChecksumLocationName");
jest.mock("./validateChecksumFromResponse");

describe(flexibleChecksumsResponseMiddleware.name, () => {
  const mockNext = jest.fn();
  const mockContext = {
    clientName: "mockClientName",
    commandName: "mockCommandName",
  };

  const mockConfig = {} as PreviouslyResolved;
  const mockRequestValidationModeMember = "ChecksumEnabled";
  const mockResponseAlgorithms = [ChecksumAlgorithm.CRC32, ChecksumAlgorithm.CRC32C];
  const mockMiddlewareConfig = {
    requestValidationModeMember: mockRequestValidationModeMember,
    responseAlgorithms: mockResponseAlgorithms,
  };

  const mockInput = { [mockRequestValidationModeMember]: "ENABLED" };
  const mockRequest = {};
  const mockArgs = { input: mockInput, request: mockRequest } as DeserializeHandlerArguments<any>;
  const mockChecksum = "mockChecksum";
  const mockResult = {
    response: {
      body: "mockResponsebody",
      headers: {
        [ChecksumAlgorithm.CRC32]: mockChecksum,
      },
    },
  };

  beforeEach(() => {
    mockNext.mockResolvedValueOnce(mockResult);
    const { isInstance } = HttpRequest;
    (isInstance as unknown as jest.Mock).mockReturnValue(true);
    (isChecksumWithPartNumber as jest.Mock).mockReturnValue(false);
    (isStreaming as jest.Mock).mockReturnValue(false);
    (getChecksumLocationName as jest.Mock).mockImplementation((algorithm) => algorithm);
  });

  afterEach(() => {
    expect(mockNext).toHaveBeenCalledTimes(1);
    jest.clearAllMocks();
  });

  describe("skips", () => {
    it("if not an instance of HttpRequest", async () => {
      const { isInstance } = HttpRequest;
      (isInstance as unknown as jest.Mock).mockReturnValue(false);
      const handler = flexibleChecksumsResponseMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, mockContext);
      await handler(mockArgs);
      expect(validateChecksumFromResponse).not.toHaveBeenCalled();
    });

    describe("response checksum", () => {
      it("if requestValidationModeMember is not defined", async () => {
        const mockMwConfig = Object.assign({}, mockMiddlewareConfig) as FlexibleChecksumsMiddlewareConfig;
        delete mockMwConfig.requestValidationModeMember;
        const handler = flexibleChecksumsResponseMiddleware(mockConfig, mockMwConfig)(mockNext, mockContext);
        await handler(mockArgs);
        expect(validateChecksumFromResponse).not.toHaveBeenCalled();
      });

      it("if requestValidationModeMember is not enabled in input", async () => {
        const handler = flexibleChecksumsResponseMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, mockContext);
        await handler({ ...mockArgs, input: {} });
        expect(validateChecksumFromResponse).not.toHaveBeenCalled();
      });

      it("if checksum is for S3 whole-object multipart GET", async () => {
        (isChecksumWithPartNumber as jest.Mock).mockReturnValue(true);
        const handler = flexibleChecksumsResponseMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, {
          clientName: "S3Client",
          commandName: "GetObjectCommand",
        });
        await handler(mockArgs);
        expect(isChecksumWithPartNumber).toHaveBeenCalledTimes(1);
        expect(isChecksumWithPartNumber).toHaveBeenCalledWith(mockChecksum);
        expect(validateChecksumFromResponse).not.toHaveBeenCalled();
      });
    });
  });

  describe("validates checksum from response header", () => {
    it("generic case", async () => {
      const handler = flexibleChecksumsResponseMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, mockContext);

      await handler(mockArgs);
      expect(validateChecksumFromResponse).toHaveBeenCalledWith(mockResult.response, {
        config: mockConfig,
        responseAlgorithms: mockResponseAlgorithms,
      });
    });

    it("if checksum is for S3 GET without part number", async () => {
      (isChecksumWithPartNumber as jest.Mock).mockReturnValue(false);
      const handler = flexibleChecksumsResponseMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, {
        clientName: "S3Client",
        commandName: "GetObjectCommand",
      });
      await handler(mockArgs);
      expect(isChecksumWithPartNumber).toHaveBeenCalledTimes(1);
      expect(isChecksumWithPartNumber).toHaveBeenCalledWith(mockChecksum);
      expect(validateChecksumFromResponse).toHaveBeenCalledWith(mockResult.response, {
        config: mockConfig,
        responseAlgorithms: mockResponseAlgorithms,
      });
    });
  });
});
