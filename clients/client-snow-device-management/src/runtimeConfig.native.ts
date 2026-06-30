// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SnowDeviceManagementClientConfig } from "./SnowDeviceManagementClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SnowDeviceManagementClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
