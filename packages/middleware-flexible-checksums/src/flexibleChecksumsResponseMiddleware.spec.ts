import { HttpRequest } from "@smithy/protocol-http";
import { DeserializeHandlerArguments } from "@smithy/types";

import { PreviouslyResolved } from "./configuration";
import { flexibleChecksumsResponseMiddleware } from "./flexibleChecksumsResponseMiddleware";
import { FlexibleChecksumsMiddlewareConfig } from "./getFlexibleChecksumsPlugin";
import { isStreaming } from "./isStreaming";
import { validateChecksumFromResponse } from "./validateChecksumFromResponse";

jest.mock("@smithy/protocol-http");
jest.mock("./isStreaming");
jest.mock("./validateChecksumFromResponse");

describe(flexibleChecksumsResponseMiddleware.name, () => {
  const mockNext = jest.fn();
  const mockContext = {
    clientName: "mockClientName",
    commandName: "mockCommandName",
  };

  const mockConfig = {} as PreviouslyResolved;
  const mockRequestValidationModeMember = "ChecksumEnabled";
  const mockMiddlewareConfig = {
    requestValidationModeMember: mockRequestValidationModeMember,
  };

  const mockInput = { [mockRequestValidationModeMember]: "ENABLED" };
  const mockRequest = {};
  const mockArgs = { input: mockInput, request: mockRequest } as DeserializeHandlerArguments<any>;
  const mockResult = { response: { body: "mockResponsebody" } };

  beforeEach(() => {
    mockNext.mockResolvedValueOnce(mockResult);
    const { isInstance } = HttpRequest;
    (isInstance as unknown as jest.Mock).mockReturnValue(true);
    (isStreaming as jest.Mock).mockReturnValue(false);
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
    });
  });

  it("validates checksum from the response header", async () => {
    const mockResponseAlgorithms = ["ALGO1", "ALGO2"];

    const handler = flexibleChecksumsResponseMiddleware(mockConfig, {
      ...mockMiddlewareConfig,
      responseAlgorithms: mockResponseAlgorithms,
    })(mockNext, mockContext);

    await handler(mockArgs);
    expect(validateChecksumFromResponse).toHaveBeenCalledWith(mockResult.response, {
      clientName: mockContext.clientName,
      commandName: mockContext.commandName,
      config: mockConfig,
      responseAlgorithms: mockResponseAlgorithms,
    });
  });
});
