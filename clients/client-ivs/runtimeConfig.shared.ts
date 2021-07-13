import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IvsClientConfig } from "./IvsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IvsClientConfig) => ({
  apiVersion: "2020-07-14",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "ivs"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
