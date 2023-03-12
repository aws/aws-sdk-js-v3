import { TokenIdentity } from "@aws-sdk/types";
import { normalizeIdentityProvider } from "@aws-sdk/util-auth";

import { resolveTokenConfig } from "./resolveTokenConfig";
import { tokenDefaultProvider } from "./tokenDefaultProvider";

jest.mock("@aws-sdk/util-auth");
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

  describe("sets identity if token is provided", () => {
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
        token: mockOutputToken,
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

  describe("sets identity if identity is provided", () => {
    beforeEach(() => {
      (normalizeIdentityProvider as jest.Mock).mockReturnValue(mockOutputToken);
      (tokenDefaultProvider as jest.Mock).mockReturnValue(mockOutputToken);
    });

    afterEach(() => {
      expect(tokenDefaultProvider).not.toHaveBeenCalled();
    });

    const testTokenProviderWithIdentity = (identity) => {
      expect(resolveTokenConfig({ ...mockInput, identity })).toEqual({
        ...mockInput,
        identity: mockOutputToken,
        token: mockOutputToken,
      });
      expect(normalizeIdentityProvider).toHaveBeenCalledWith(identity);
    };

    it("when identity is a function", () => {
      testTokenProviderWithIdentity(jest.fn());
    });

    it("when identity is an object", () => {
      testTokenProviderWithIdentity({
        token: "mockAccessToken",
        expiration: new Date(Date.now() + ONE_HOUR_IN_MS),
      });
    });
  });

  it("sets identity from token over identity if both are provided", () => {
    (tokenDefaultProvider as jest.Mock).mockReturnValue(mockOutputToken);
    expect(resolveTokenConfig({
      ...mockInput,
      token: mockOutputToken,
      identity: {
        token: "IDENTITY",
      } as TokenIdentity,
    })).toEqual({ ...mockInput, token: mockOutputToken, identity: mockOutputToken });
    expect(normalizeIdentityProvider).toHaveBeenCalledWith(mockOutputToken);
    expect(tokenDefaultProvider).not.toHaveBeenCalled();
  });

  it("sets identity from tokenDefaultProvider if not provided", () => {
    (tokenDefaultProvider as jest.Mock).mockReturnValue(mockOutputToken);
    expect(resolveTokenConfig(mockInput)).toEqual({
      ...mockInput,
      token: mockOutputToken,
      identity: mockOutputToken,
    });
    expect(tokenDefaultProvider).toHaveBeenCalledWith(mockInput);
    expect(normalizeIdentityProvider).not.toHaveBeenCalled();
  });
});
