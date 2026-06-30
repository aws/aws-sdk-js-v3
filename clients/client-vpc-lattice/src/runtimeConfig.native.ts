// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { VPCLatticeClientConfig } from "./VPCLatticeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: VPCLatticeClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
