import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { DirectoryServiceClientConfig } from "./DirectoryServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DirectoryServiceClientConfig) => ({
  apiVersion: "2015-04-16",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Directory Service"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
