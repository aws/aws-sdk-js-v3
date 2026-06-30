// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SavingsplansClientConfig } from "./SavingsplansClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SavingsplansClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
