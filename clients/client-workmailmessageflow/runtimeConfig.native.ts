import { Sha256 } from "@aws-crypto/sha256-js";
import { WorkMailMessageFlowClientConfig } from "./WorkMailMessageFlowClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkMailMessageFlowClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    runtime: "react-native",
    sha256: config.sha256 ?? Sha256,
  };
};
