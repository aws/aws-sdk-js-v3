import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { Route53DomainsClientConfig } from "./Route53DomainsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Route53DomainsClientConfig) => ({
  apiVersion: "2014-05-15",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Route 53 Domains"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
