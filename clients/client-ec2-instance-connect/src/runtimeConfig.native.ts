// smithy-typescript generated code
import { Sha256 } from "@aws-crypto/sha256-js";

import { EC2InstanceConnectClientConfig } from "./EC2InstanceConnectClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EC2InstanceConnectClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
    sha256: config?.sha256 ?? Sha256,
  };
};
