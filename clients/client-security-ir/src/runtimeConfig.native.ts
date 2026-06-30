// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SecurityIRClientConfig } from "./SecurityIRClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SecurityIRClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
