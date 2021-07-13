import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CostExplorerClientConfig } from "./CostExplorerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CostExplorerClientConfig) => ({
  apiVersion: "2017-10-25",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Cost Explorer"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
