import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ECSClientConfig } from "./ECSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ECSClientConfig) => ({
  apiVersion: "2014-11-13",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "ECS"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
