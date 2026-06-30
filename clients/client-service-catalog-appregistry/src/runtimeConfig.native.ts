// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { ServiceCatalogAppRegistryClientConfig } from "./ServiceCatalogAppRegistryClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServiceCatalogAppRegistryClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
