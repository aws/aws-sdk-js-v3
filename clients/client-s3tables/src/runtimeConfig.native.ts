// smithy-typescript generated code
import { Sha256 } from "@aws-crypto/sha256-js";

import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { S3TablesClientConfig } from "./S3TablesClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: S3TablesClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
    sha256: config?.sha256 ?? Sha256,
  };
};
