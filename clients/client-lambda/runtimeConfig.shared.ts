import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { LambdaClientConfig } from "./LambdaClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LambdaClientConfig) => ({
  apiVersion: "2015-03-31",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Lambda"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
