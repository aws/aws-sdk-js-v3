import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { PinpointEmailClientConfig } from "./PinpointEmailClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PinpointEmailClientConfig) => ({
  apiVersion: "2018-07-26",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Pinpoint Email"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
