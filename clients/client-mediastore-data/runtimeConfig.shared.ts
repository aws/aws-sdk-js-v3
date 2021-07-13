import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MediaStoreDataClientConfig } from "./MediaStoreDataClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaStoreDataClientConfig) => ({
  apiVersion: "2017-09-01",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "MediaStore Data"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
