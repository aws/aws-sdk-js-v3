import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ApplicationDiscoveryServiceClientConfig } from "./ApplicationDiscoveryServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ApplicationDiscoveryServiceClientConfig) => ({
  apiVersion: "2015-11-01",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Application Discovery Service"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
