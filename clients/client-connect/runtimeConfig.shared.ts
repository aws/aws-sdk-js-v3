import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ConnectClientConfig } from "./ConnectClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ConnectClientConfig) => ({
  apiVersion: "2017-08-08",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Connect"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
