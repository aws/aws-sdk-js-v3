// smithy-typescript generated code
import type { LicenseManagerUserSubscriptionsClientConfig } from "./LicenseManagerUserSubscriptionsClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LicenseManagerUserSubscriptionsClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
