import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ManagedBlockchainClientConfig } from "./ManagedBlockchainClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ManagedBlockchainClientConfig) => ({
  apiVersion: "2018-09-24",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "ManagedBlockchain"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
