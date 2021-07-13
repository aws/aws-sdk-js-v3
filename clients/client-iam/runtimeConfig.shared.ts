import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IAMClientConfig } from "./IAMClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IAMClientConfig) => ({
  apiVersion: "2010-05-08",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "IAM"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
