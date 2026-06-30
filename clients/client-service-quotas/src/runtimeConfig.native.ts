// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { ServiceQuotasClientConfig } from "./ServiceQuotasClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServiceQuotasClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
