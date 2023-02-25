import { normalizeIdentityProvider } from "@aws-sdk/util-identity-auth";

import { resolveTokenConfig } from "./resolveTokenConfig";
import { tokenDefaultProvider } from "./tokenDefaultProvider";

jest.mock("@aws-sdk/util-identity-auth");
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

  describe("sets token from normalizeIdentityProvider if token is provided", () => {
    beforeEach(() => {
      (normalizeIdentityProvider as jest.Mock).mockReturnValue(mockOutputToken);
      (tokenDefaultProvider as jest.Mock).mockReturnValue(mockOutputToken);
    });

    afterEach(() => {
      expect(tokenDefaultProvider).not.toHaveBeenCalled();
    });

    const testTokenProviderWithToken = (token) => {
      expect(resolveTokenConfig({ ...mockInput, token })).toEqual({
        ...mockInput,
        token,
        identity: mockOutputToken,
      });
      expect(normalizeIdentityProvider).toHaveBeenCalledWith(token);
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
    expect(resolveTokenConfig(mockInput)).toEqual({ ...mockInput, identity: mockOutputToken });
    expect(tokenDefaultProvider).toHaveBeenCalledWith(mockInput);
    expect(normalizeIdentityProvider).not.toHaveBeenCalled();
  });

  it("sets token over identity", () => {
    const token = {
      token: "token set",
    };
    const identity = {
      token: "identity set",
    };
    expect(
      resolveTokenConfig({
        ...mockInput,
        token,
        identity,
      })
    ).toEqual({
      ...mockInput,
      token,
      identity: mockOutputToken,
    });
    expect(normalizeIdentityProvider).toHaveBeenCalledWith(token);
  });

  it("sets identity with no token in config", () => {
    const identity = {
      token: "identity set",
    };
    expect(
      resolveTokenConfig({
        ...mockInput,
        identity,
      })
    ).toEqual({
      ...mockInput,
      identity: mockOutputToken,
    });
    expect(normalizeIdentityProvider).toHaveBeenCalledWith(identity);
  });
});
