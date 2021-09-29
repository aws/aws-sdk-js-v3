import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ManagedBlockchainClientConfig } from "./ManagedBlockchainClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ManagedBlockchainClientConfig) => ({
  apiVersion: "2018-09-24",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "ManagedBlockchain",
  urlParser: config?.urlParser ?? parseUrl,
});
