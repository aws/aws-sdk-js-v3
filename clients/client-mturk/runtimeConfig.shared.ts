import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MTurkClientConfig } from "./MTurkClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MTurkClientConfig) => ({
  apiVersion: "2017-01-17",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "MTurk"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
