import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { TransferClientConfig } from "./TransferClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TransferClientConfig) => ({
  apiVersion: "2018-11-05",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Transfer"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
