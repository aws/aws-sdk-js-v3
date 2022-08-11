// smithy-typescript generated code
import { Sha256 } from "@aws-crypto/sha256-js";

import { PrivateNetworksClientConfig } from "./PrivateNetworksClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PrivateNetworksClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
    sha256: config?.sha256 ?? Sha256,
  };
};
