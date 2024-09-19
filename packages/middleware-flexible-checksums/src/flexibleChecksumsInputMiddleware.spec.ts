import { PreviouslyResolved } from "./configuration";
import { ResponseChecksumValidation } from "./constants";
import { flexibleChecksumsInputMiddleware } from "./flexibleChecksumsInputMiddleware";

describe(flexibleChecksumsInputMiddleware.name, () => {
  const mockNext = jest.fn();
  const mockMiddlewareConfig = {
    requestValidationModeMember: "requestValidationModeMember",
  };
  const mockConfig = {
    responseChecksumValidation: () => Promise.resolve(ResponseChecksumValidation.WHEN_SUPPORTED),
  } as PreviouslyResolved;

  afterEach(() => {
    expect(mockNext).toHaveBeenCalledTimes(1);
    jest.clearAllMocks();
  });

  describe("sets input.requestValidationModeMember", () => {
    it("when requestValidationModeMember is defined and responseChecksumValidation is supported", async () => {
      const handler = flexibleChecksumsInputMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, {});
      await handler({ input: {} });
      expect(mockNext).toHaveBeenCalledWith({ input: { requestValidationModeMember: "ENABLED" } });
    });
  });

  describe("leaves input.requestValidationModeMember", () => {
    const mockArgs = { input: {} };

    it("when requestValidationModeMember is not defined", async () => {
      const mockMiddlewareConfig = {};

      const handler = flexibleChecksumsInputMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, {});
      await handler(mockArgs);

      expect(mockNext).toHaveBeenCalledWith(mockArgs);
    });

    it("when responseChecksumValidation is required", async () => {
      const mockConfig = {
        responseChecksumValidation: () => Promise.resolve(ResponseChecksumValidation.WHEN_REQUIRED),
      } as PreviouslyResolved;

      const handler = flexibleChecksumsInputMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, {});
      await handler(mockArgs);

      expect(mockNext).toHaveBeenCalledWith(mockArgs);
    });
  });
});
