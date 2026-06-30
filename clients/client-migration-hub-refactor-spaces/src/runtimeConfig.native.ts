// smithy-typescript generated code
import type { MigrationHubRefactorSpacesClientConfig } from "./MigrationHubRefactorSpacesClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MigrationHubRefactorSpacesClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
