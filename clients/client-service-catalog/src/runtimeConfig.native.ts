// smithy-typescript generated code
import { Sha256 } from "@aws-crypto/sha256-js";

import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import { ServiceCatalogClientConfig } from "./ServiceCatalogClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServiceCatalogClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
    sha256: config?.sha256 ?? Sha256,
  };
};
