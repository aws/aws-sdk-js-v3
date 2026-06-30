// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { TrustedAdvisorClientConfig } from "./TrustedAdvisorClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TrustedAdvisorClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
