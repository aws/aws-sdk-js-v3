import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { loadConfig, NODE_REGION_CONFIG_FILE_OPTIONS, NODE_REGION_CONFIG_OPTIONS } from "@smithy/core/config";

import type { DsqlSignerConfig } from "./Signer";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DsqlSignerConfig) => {
  return {
    runtime: "node",
    credentials: config?.credentials ?? defaultProvider(),
    region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
    ...config,
  };
};
