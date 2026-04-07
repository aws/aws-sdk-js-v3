// smithy-typescript generated code
import { Sha256 } from "@aws-crypto/sha256-js";

import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { S3FilesClientConfig } from "./S3FilesClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: S3FilesClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
    sha256: config?.sha256 ?? Sha256,
  };
};
