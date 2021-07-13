import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { GreengrassClientConfig } from "./GreengrassClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GreengrassClientConfig) => ({
  apiVersion: "2017-06-07",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Greengrass"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
