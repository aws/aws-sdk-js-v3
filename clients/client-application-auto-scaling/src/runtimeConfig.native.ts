// smithy-typescript generated code
import { Sha256 } from "@aws-crypto/sha256-js";

import { ApplicationAutoScalingClientConfig } from "./ApplicationAutoScalingClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ApplicationAutoScalingClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
    sha256: config?.sha256 ?? Sha256,
  };
};
