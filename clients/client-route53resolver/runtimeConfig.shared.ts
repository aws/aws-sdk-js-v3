import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { Route53ResolverClientConfig } from "./Route53ResolverClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Route53ResolverClientConfig) => ({
  apiVersion: "2018-04-01",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Route53Resolver"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
