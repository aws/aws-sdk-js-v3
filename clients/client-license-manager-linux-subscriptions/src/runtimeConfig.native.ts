// smithy-typescript generated code
import type { LicenseManagerLinuxSubscriptionsClientConfig } from "./LicenseManagerLinuxSubscriptionsClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LicenseManagerLinuxSubscriptionsClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
