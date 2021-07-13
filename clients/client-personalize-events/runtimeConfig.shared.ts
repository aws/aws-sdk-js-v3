import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { PersonalizeEventsClientConfig } from "./PersonalizeEventsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PersonalizeEventsClientConfig) => ({
  apiVersion: "2018-03-22",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Personalize Events"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
