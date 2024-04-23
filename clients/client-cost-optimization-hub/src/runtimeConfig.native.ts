// smithy-typescript generated code
import { Sha256 } from "@aws-crypto/sha256-js";

import { CostOptimizationHubClientConfig } from "./CostOptimizationHubClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CostOptimizationHubClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
    sha256: config?.sha256 ?? Sha256,
  };
};
