// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SSOOIDCClientConfig } from "./SSOOIDCClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SSOOIDCClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
