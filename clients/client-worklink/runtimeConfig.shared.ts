import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { WorkLinkClientConfig } from "./WorkLinkClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkLinkClientConfig) => ({
  apiVersion: "2018-09-25",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "WorkLink"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
