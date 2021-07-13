import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { FinspaceDataClientConfig } from "./FinspaceDataClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: FinspaceDataClientConfig) => ({
  apiVersion: "2020-07-13",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "finspace data"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
