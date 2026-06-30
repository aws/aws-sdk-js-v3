// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { ServiceCatalogClientConfig } from "./ServiceCatalogClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServiceCatalogClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
