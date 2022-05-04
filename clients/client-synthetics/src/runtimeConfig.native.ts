// smithy-typescript generated code
import { Sha256 } from "@aws-crypto/sha256-js";

import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import { SyntheticsClientConfig } from "./SyntheticsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SyntheticsClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
    sha256: config?.sha256 ?? Sha256,
  };
};
