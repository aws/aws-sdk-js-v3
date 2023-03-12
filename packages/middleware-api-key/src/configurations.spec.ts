import { resolveApiKeyConfig } from "./index";

describe(resolveApiKeyConfig.name, () => {
  it("should resolve identity given an apiKey provider", async () => {
    const config = {
      apiKey: () => Promise.resolve("example-api-key"),
    };
    const result = resolveApiKeyConfig(config);
    expect(result.apiKey).toBeDefined();
    expect(await result.apiKey!()).toEqual("example-api-key");
    expect(result.identity).toBeDefined();
    expect(await result.identity!()).toEqual({
      token: "example-api-key"
    });
  });

  it("should resolve identity given an apiKey", async () => {
    const config = {
      apiKey: "example-api-key",
    };
    const result = resolveApiKeyConfig(config);
    expect(result.apiKey).toBeDefined();
    expect(await result.apiKey!()).toEqual("example-api-key");
    expect(result.identity).toBeDefined();
    expect(await result.identity!()).toEqual({
      token: "example-api-key"
    });
  });

  it("should resolve identity given an identity", async () => {
    const config = {
      identity: {
        token: "example-api-key",
      },
    };
    const result = resolveApiKeyConfig(config);
    expect(result.identity).toBeDefined();
    expect(await result.identity!()).toEqual({
      token: "example-api-key"
    });
  });

  it("should resolve identity given an identity provider", async () => {
    const config = {
      identity: async () => ({
        token: "example-api-key",
      }),
    };
    const result = resolveApiKeyConfig(config);
    expect(result.identity).toBeDefined();
    expect(await result.identity!()).toEqual({
      token: "example-api-key"
    });
  });

  it("should resolve identity with apiKey given both apiKey and identity", async () => {
    const config = {
      apiKey: "example-api-key",
      identity: async () => ({
        token: "IDENTITY",
      }),
    };
    const result = resolveApiKeyConfig(config);
    expect(result.apiKey).toBeDefined();
    expect(await result.apiKey!()).toEqual("example-api-key");
    expect(result.identity).toBeDefined();
    expect(await result.identity!()).toEqual({
      token: "example-api-key"
    });
  });
});
