// smithy-typescript generated code
import { Sha256 } from "@aws-crypto/sha256-js";

import { Route53RecoveryControlConfigClientConfig } from "./Route53RecoveryControlConfigClient";
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
    sha256: config?.sha256 ?? Sha256,
  };
};
