// smithy-typescript generated code
import type { Route53RecoveryControlConfigClientConfig } from "./Route53RecoveryControlConfigClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Route53RecoveryControlConfigClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
