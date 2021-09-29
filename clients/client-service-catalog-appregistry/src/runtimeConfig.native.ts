import { Sha256 } from "@aws-crypto/sha256-js";
import { ServiceCatalogAppRegistryClientConfig } from "./ServiceCatalogAppRegistryClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServiceCatalogAppRegistryClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
    sha256: config?.sha256 ?? Sha256,
  };
};
