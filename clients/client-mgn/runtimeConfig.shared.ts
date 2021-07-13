import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MgnClientConfig } from "./MgnClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MgnClientConfig) => ({
  apiVersion: "2020-02-26",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "mgn"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
