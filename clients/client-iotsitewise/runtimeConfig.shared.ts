import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IoTSiteWiseClientConfig } from "./IoTSiteWiseClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTSiteWiseClientConfig) => ({
  apiVersion: "2019-12-02",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "IoTSiteWise"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
