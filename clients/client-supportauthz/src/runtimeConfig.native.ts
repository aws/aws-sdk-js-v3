// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SupportAuthZClientConfig } from "./SupportAuthZClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SupportAuthZClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
