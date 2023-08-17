import { HttpRequest } from "@smithy/protocol-http";

import { tokenMiddleware } from "./tokenMiddleware";

jest.mock("@smithy/protocol-http");

const ONE_HOUR_IN_MS = 3600 * 1000;

describe(tokenMiddleware.name, () => {
  const mockToken = {
    token: "mockAccessToken",
    expiration: new Date(Date.now() + ONE_HOUR_IN_MS),
  };
  const mockTokenProvider = jest.fn().mockReturnValue(Promise.resolve(mockToken));

  const mockOptions = {
    token: mockTokenProvider,
  };

  const mockNext = jest.fn();
  const mockContext = {};
  const mockArgs = { request: { headers: {} } };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("no changes if it's not an HttpRequest", async () => {
    const { isInstance } = HttpRequest;
    (isInstance as unknown as jest.Mock).mockReturnValue(false);
    await tokenMiddleware(mockOptions)(mockNext, mockContext)(mockArgs as any);
    expect(mockNext).toHaveBeenCalledWith(mockArgs);
    expect(mockOptions.token).not.toHaveBeenCalled();
  });

  describe("HttpRequest", () => {
    beforeEach(() => {
      const { isInstance } = HttpRequest;
      (isInstance as unknown as jest.Mock).mockReturnValue(true);
    });

    it("continues if token is not provided", async () => {
      mockOptions.token.mockReturnValueOnce(null);
      await tokenMiddleware(mockOptions)(mockNext, mockContext)(mockArgs as any);
      expect(mockNext).toHaveBeenCalledWith(mockArgs);
      expect(mockOptions.token).toHaveBeenCalledTimes(1);
    });

    it("re-throws error if token provider fails", async () => {
      const mockError = new Error("mockError");
      mockOptions.token.mockRejectedValueOnce(mockError);
      try {
        await tokenMiddleware(mockOptions)(mockNext, mockContext)(mockArgs as any);
        fail(`Expected ${mockError}`);
      } catch (error) {
        expect(error).toStrictEqual(mockError);
      }
      expect(mockOptions.token).toHaveBeenCalledTimes(1);
      expect(mockNext).not.toHaveBeenCalled();
    });

    it("Sets bearer token in authorization", async () => {
      await tokenMiddleware(mockOptions)(mockNext, mockContext)(mockArgs as any);
      expect(mockNext).toHaveBeenCalledWith({
        ...mockArgs,
        request: { ...mockArgs.request, headers: { authorization: `Bearer ${mockToken.token}` } },
      });
      expect(mockOptions.token).toHaveBeenCalledTimes(1);
    });
  });
});
