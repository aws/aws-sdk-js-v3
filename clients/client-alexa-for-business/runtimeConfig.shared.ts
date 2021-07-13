import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { AlexaForBusinessClientConfig } from "./AlexaForBusinessClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AlexaForBusinessClientConfig) => ({
  apiVersion: "2017-11-09",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Alexa For Business"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
