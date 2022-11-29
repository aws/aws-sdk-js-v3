import { normalizeTokenProvider } from "./normalizeTokenProvider";
import { resolveTokenConfig } from "./resolveTokenConfig";
import { tokenDefaultProvider } from "./tokenDefaultProvider";

jest.mock("./normalizeTokenProvider");
jest.mock("./tokenDefaultProvider");

const ONE_HOUR_IN_MS = 3600 * 1000;

describe(resolveTokenConfig.name, () => {
  const mockInput = {};
  const mockOutputToken = () =>
    Promise.resolve({
      token: "mockOutputAccessToken",
      expiration: new Date(Date.now() + 2 * ONE_HOUR_IN_MS),
    });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("sets token from normalizeTokenProvider if token is provided", () => {
    beforeEach(() => {
      (normalizeTokenProvider as jest.Mock).mockReturnValue(mockOutputToken);
      (tokenDefaultProvider as jest.Mock).mockReturnValue(mockOutputToken);
    });

    afterEach(() => {
      expect(tokenDefaultProvider).not.toHaveBeenCalled();
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
        expiration: new Date(Date.now() + ONE_HOUR_IN_MS),
      });
    });
  });

  it("sets token from tokenDefaultProvider if token is not provided", () => {
    (tokenDefaultProvider as jest.Mock).mockReturnValue(mockOutputToken);
    expect(resolveTokenConfig(mockInput)).toEqual({ ...mockInput, token: mockOutputToken });
    expect(tokenDefaultProvider).toHaveBeenCalledWith(mockInput);
    expect(normalizeTokenProvider).not.toHaveBeenCalled();
  });
});
