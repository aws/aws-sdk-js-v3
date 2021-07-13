import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ConnectParticipantClientConfig } from "./ConnectParticipantClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ConnectParticipantClientConfig) => ({
  apiVersion: "2018-09-07",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "ConnectParticipant"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
