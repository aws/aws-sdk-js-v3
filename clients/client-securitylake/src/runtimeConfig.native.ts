// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SecurityLakeClientConfig } from "./SecurityLakeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SecurityLakeClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
