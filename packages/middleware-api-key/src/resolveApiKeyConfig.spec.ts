import { resolveApiKeyConfig } from "./resolveApiKeyConfig";

describe(resolveApiKeyConfig.name, () => {
  const apiKey = "example-api-key";
  it("should return an identity provider for an api key provider", async () => {
    const config = {
      apiKey: () => Promise.resolve(apiKey),
    };
    const resolvedConfig = resolveApiKeyConfig(config);
    expect(await resolvedConfig.identity!()).toEqual({
      token: apiKey,
    });
  });
  it("should return an identity provider for an api key", async () => {
    const config = {
      apiKey,
    };
    const resolvedConfig = resolveApiKeyConfig(config);
    expect(await resolvedConfig.identity!()).toEqual({
      token: apiKey,
    });
  });
  it("should return an identity provider for a token identity", async () => {
    const config = {
      identity: {
        token: apiKey,
      },
    };
    const resolvedConfig = resolveApiKeyConfig(config);
    expect(await resolvedConfig.identity!()).toEqual({
      token: apiKey,
    });
  });
  it("should return an identity provider for a token identity provider", async () => {
    const config = {
      identity: async () => ({
        token: apiKey,
      }),
    };
    const resolvedConfig = resolveApiKeyConfig(config);
    expect(await resolvedConfig.identity!()).toEqual({
      token: apiKey,
    });
  });
  it("should use api key over identity", async () => {
    const config = {
      apiKey: "api key set",
      identity: {
        token: "identity set",
      },
    };
    const resolvedConfig = resolveApiKeyConfig(config);
    expect(await resolvedConfig.identity!()).toEqual({
      token: "api key set",
    });
  });
  it("should return undefined if neither api key or identity is set", async () => {
    const config = {};
    const resolvedConfig = resolveApiKeyConfig(config);
    expect(resolvedConfig.identity).toBeUndefined();
  });
});
