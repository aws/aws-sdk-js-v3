import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { DirectConnectClientConfig } from "./DirectConnectClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DirectConnectClientConfig) => ({
  apiVersion: "2012-10-25",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Direct Connect"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
