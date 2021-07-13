import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ECRClientConfig } from "./ECRClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ECRClientConfig) => ({
  apiVersion: "2015-09-21",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "ECR"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
