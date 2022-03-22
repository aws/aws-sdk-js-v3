import { normalizeTokenProvider } from "./normalizeTokenProvider";
import { resolveTokenConfig } from "./resolveTokenConfig";

jest.mock("./normalizeTokenProvider");

describe(resolveTokenConfig.name, () => {
  const mockInput = {
    tokenDefaultProvider: jest.fn(),
  };
  const mockOutputToken = () =>
    Promise.resolve({
      token: "mockOutputAccessToken",
      expiration: new Date(Date.now() + 7200 * 1000),
    });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("sets token from normalizeTokenProvider if token is provided", () => {
    beforeEach(() => {
      (normalizeTokenProvider as jest.Mock).mockReturnValue(mockOutputToken);
    });

    afterEach(() => {
      expect(mockInput.tokenDefaultProvider).not.toHaveBeenCalled();
    });

    const testTokenProviderWithToken = (token) => {
      expect(resolveTokenConfig({ ...mockInput, token })).toEqual({ ...mockInput, token: mockOutputToken });
      expect(normalizeTokenProvider).toHaveBeenCalledWith(token);
    };

    it("when token is a function", () => {
      testTokenProviderWithToken(jest.fn());
    });

    it("when token is an object", () => {
      testTokenProviderWithToken({
        token: "mockAccessToken",
        expiration: new Date(Date.now() + 3600 * 1000),
      });
    });
  });

  it("sets token from tokenDefaultProvider if token is not provided", () => {
    mockInput.tokenDefaultProvider.mockReturnValue(mockOutputToken);
    expect(resolveTokenConfig(mockInput)).toEqual({ ...mockInput, token: mockOutputToken });
    expect(mockInput.tokenDefaultProvider).toHaveBeenCalledWith(mockInput);
    expect(normalizeTokenProvider).not.toHaveBeenCalled();
  });
});
