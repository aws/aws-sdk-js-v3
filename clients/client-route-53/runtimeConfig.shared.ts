import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { Route53ClientConfig } from "./Route53Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Route53ClientConfig) => ({
  apiVersion: "2013-04-01",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Route 53"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
