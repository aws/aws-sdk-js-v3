import { EndpointMode } from "./EndpointMode";
import {
  CONFIG_ENDPOINT_MODE_NAME,
  ENDPOINT_MODE_CONFIG_OPTIONS,
  ENV_ENDPOINT_MODE_NAME,
} from "./EndpointModeConfigOptions";

describe("ENDPOINT_MODE_CONFIG_OPTIONS", () => {
  describe("environmentVariableSelector", () => {
    const { environmentVariableSelector } = ENDPOINT_MODE_CONFIG_OPTIONS;
    it.each([undefined, "mockEndpointMode"])(`when env[${ENV_ENDPOINT_MODE_NAME}]: %s`, (mockEndpoint) => {
      expect(environmentVariableSelector({ [ENV_ENDPOINT_MODE_NAME]: mockEndpoint })).toBe(mockEndpoint);
    });
  });

  describe("configFileSelector", () => {
    const { configFileSelector } = ENDPOINT_MODE_CONFIG_OPTIONS;
    it.each([undefined, "mockEndpointMode"])(`when env[${CONFIG_ENDPOINT_MODE_NAME}]: %s`, (mockEndpoint) => {
      expect(configFileSelector({ [CONFIG_ENDPOINT_MODE_NAME]: mockEndpoint })).toBe(mockEndpoint);
    });
  });

  it(`default returns ${EndpointMode.IPv4}`, () => {
    const { default: defaultKey } = ENDPOINT_MODE_CONFIG_OPTIONS;
    expect(defaultKey).toBe(EndpointMode.IPv4);
  });
});
