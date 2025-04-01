import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { NODE_REGION_CONFIG_FILE_OPTIONS, NODE_REGION_CONFIG_OPTIONS } from "@smithy/config-resolver";
import { Hash } from "@smithy/hash-node";
import { loadConfig } from "@smithy/node-config-provider";

import { DsqlSignerConfig } from "./Signer";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DsqlSignerConfig) => {
  return {
    runtime: "node",
    sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
    credentials: config?.credentials ?? fromNodeProviderChain(),
    region: config?.region ?? loadConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
    ...config,
  };
};
