import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { PersonalizeClientConfig } from "./PersonalizeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PersonalizeClientConfig) => ({
  apiVersion: "2018-05-22",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Personalize"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
