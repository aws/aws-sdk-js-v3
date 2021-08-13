import { CONFIG_ENDPOINT_NAME, ENDPOINT_CONFIG_OPTIONS, ENV_ENDPOINT_NAME } from "./EndpointConfigOptions";

describe("ENDPOINT_CONFIG_OPTIONS", () => {
  describe("environmentVariableSelector", () => {
    const { environmentVariableSelector } = ENDPOINT_CONFIG_OPTIONS;
    it.each([undefined, "mockEndpoint"])(`when env[${ENV_ENDPOINT_NAME}]: %s`, (mockEndpoint) => {
      expect(environmentVariableSelector({ [ENV_ENDPOINT_NAME]: mockEndpoint })).toBe(mockEndpoint);
    });
  });

  describe("configFileSelector", () => {
    const { configFileSelector } = ENDPOINT_CONFIG_OPTIONS;
    it.each([undefined, "mockEndpoint"])(`when env[${CONFIG_ENDPOINT_NAME}]: %s`, (mockEndpoint) => {
      expect(configFileSelector({ [CONFIG_ENDPOINT_NAME]: mockEndpoint })).toBe(mockEndpoint);
    });
  });

  it("default returns undefined", () => {
    const { default: defaultKey } = ENDPOINT_CONFIG_OPTIONS;
    expect(defaultKey).toBe(undefined);
  });
});
