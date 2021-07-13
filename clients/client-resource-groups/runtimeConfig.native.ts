import { Sha256 } from "@aws-crypto/sha256-js";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { ResourceGroupsClientConfig } from "./ResourceGroupsClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ResourceGroupsClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    runtime: "react-native",
    sha256: coalesce(config.sha256, Sha256),
  };
};
