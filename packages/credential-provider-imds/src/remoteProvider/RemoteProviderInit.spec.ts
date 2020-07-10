import { DEFAULT_MAX_RETRIES, DEFAULT_TIMEOUT, providerConfigFromInit } from "./RemoteProviderInit";

describe("providerConfigFromInit", () => {
  it("should populate default values for retries and timeouts", () => {
    expect(providerConfigFromInit({})).toEqual({
      timeout: DEFAULT_TIMEOUT,
      maxRetries: DEFAULT_MAX_RETRIES,
    });
  });

  it("should pass through timeout and retries overrides", () => {
    const timeout = 123456789;
    const maxRetries = 987654321;

    expect(providerConfigFromInit({ timeout, maxRetries })).toEqual({
      timeout,
      maxRetries,
    });
  });
});
