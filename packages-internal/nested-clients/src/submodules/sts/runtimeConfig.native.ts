// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { STSClientConfig } from "./STSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: STSClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
