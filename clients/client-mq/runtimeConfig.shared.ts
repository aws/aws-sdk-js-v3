import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MqClientConfig } from "./MqClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MqClientConfig) => ({
  apiVersion: "2017-11-27",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "mq"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
