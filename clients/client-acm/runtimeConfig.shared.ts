import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ACMClientConfig } from "./ACMClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ACMClientConfig) => ({
  apiVersion: "2015-12-08",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "ACM"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
