import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { DocDBClientConfig } from "./DocDBClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DocDBClientConfig) => ({
  apiVersion: "2014-10-31",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "DocDB"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
