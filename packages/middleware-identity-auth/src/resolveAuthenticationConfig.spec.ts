import { AwsCredentialIdentity, Identity, TokenIdentity } from "@aws-sdk/types";

import { AuthenticationInputConfig } from "./configurations";
import { resolveAuthenticationConfig } from "./resolveAuthenticationConfig";
import { normalizeIdentityProvider } from "./util/provider/normalizeIdentityProvider";

describe(resolveAuthenticationConfig.name, () => {
  describe("resolve identity config", () => {
    const MOCK_IDENTITY: Identity = {
      expiration: new Date(),
    };
    const MOCK_IDENTITY_PROVIDER = normalizeIdentityProvider(MOCK_IDENTITY);

    it("gets identity from config identity", async () => {
      const MOCK_CONFIG = {
        identity: MOCK_IDENTITY,
      } as AuthenticationInputConfig;
      const output = resolveAuthenticationConfig(MOCK_CONFIG);
      expect(await output.identity()).toEqual(MOCK_IDENTITY);
    });

    it("gets identity from config identity provider", async () => {
      const MOCK_CONFIG = {
        identity: MOCK_IDENTITY_PROVIDER,
      } as AuthenticationInputConfig;
      const output = resolveAuthenticationConfig(MOCK_CONFIG);
      expect(await output.identity()).toEqual(MOCK_IDENTITY);
    });
  });

  describe("resolve token config", () => {
    const MOCK_IDENTITY: TokenIdentity = {
      token: "mockToken",
      expiration: new Date(),
    };
    const MOCK_IDENTITY_PROVIDER = normalizeIdentityProvider(MOCK_IDENTITY);

    it("gets identity from config token", async () => {
      const MOCK_CONFIG = {
        token: MOCK_IDENTITY,
      } as AuthenticationInputConfig;
      const output = resolveAuthenticationConfig(MOCK_CONFIG);
      expect(await output.identity()).toEqual(MOCK_IDENTITY);
    });

    it("gets identity from config token provider", async () => {
      const MOCK_CONFIG = {
        token: MOCK_IDENTITY_PROVIDER,
      } as AuthenticationInputConfig;
      const output = resolveAuthenticationConfig(MOCK_CONFIG);
      expect(await output.identity()).toEqual(MOCK_IDENTITY);
    });
  });

  describe("resolve credentials config", () => {
    const MOCK_IDENTITY: AwsCredentialIdentity = {
      secretAccessKey: "mockSecretAcessKey",
      accessKeyId: "mockAccessKeyId",
      sessionToken: "mockSessionToken",
      expiration: new Date(),
    };
    const MOCK_IDENTITY_PROVIDER = normalizeIdentityProvider(MOCK_IDENTITY);

    it("gets identity from config credentials", async () => {
      const MOCK_CONFIG = {
        credentials: MOCK_IDENTITY,
      } as AuthenticationInputConfig;
      const output = resolveAuthenticationConfig(MOCK_CONFIG);
      expect(await output.identity()).toEqual(MOCK_IDENTITY);
    });

    it("gets identity from config credentials provider", async () => {
      const MOCK_CONFIG = {
        credentials: MOCK_IDENTITY_PROVIDER,
      } as AuthenticationInputConfig;
      const output = resolveAuthenticationConfig(MOCK_CONFIG);
      expect(await output.identity()).toEqual(MOCK_IDENTITY);
    });
  });

  describe("resolve defaultIdentityProvider config", () => {
    const MOCK_IDENTITY: AwsCredentialIdentity = {
      secretAccessKey: "mockSecretAcessKey",
      accessKeyId: "mockAccessKeyId",
      sessionToken: "mockSessionToken",
      expiration: new Date(),
    };
    const MOCK_IDENTITY_PROVIDER = normalizeIdentityProvider(MOCK_IDENTITY);
    const MOCK_DEFAULT_WRAPPER = () => MOCK_IDENTITY_PROVIDER;

    const MOCK_ANONYMOUS_IDENTITY = {};

    it("gets anonymous identity with no identity and defaultIdentityProvider", async () => {
      const MOCK_CONFIG = {} as AuthenticationInputConfig;
      const output = resolveAuthenticationConfig(MOCK_CONFIG);
      expect(await output.identity()).toEqual(MOCK_ANONYMOUS_IDENTITY);
    });

    it("gets default identity with defaultIdentityProvider", async () => {
      const MOCK_CONFIG = {
        defaultIdentityProvider: MOCK_DEFAULT_WRAPPER,
      } as AuthenticationInputConfig;
      const output = resolveAuthenticationConfig(MOCK_CONFIG);
      expect(await output.identity()).toEqual(MOCK_IDENTITY);
    });
  });
});
