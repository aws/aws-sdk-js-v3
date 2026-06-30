// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { VerifiedPermissionsClientConfig } from "./VerifiedPermissionsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: VerifiedPermissionsClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
