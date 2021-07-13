import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ServiceDiscoveryClientConfig } from "./ServiceDiscoveryClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServiceDiscoveryClientConfig) => ({
  apiVersion: "2017-03-14",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "ServiceDiscovery"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
