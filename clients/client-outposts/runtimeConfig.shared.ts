import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { OutpostsClientConfig } from "./OutpostsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: OutpostsClientConfig) => ({
  apiVersion: "2019-12-03",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Outposts"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
