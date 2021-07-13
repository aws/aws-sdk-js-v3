import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CloudHSMClientConfig } from "./CloudHSMClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudHSMClientConfig) => ({
  apiVersion: "2014-05-30",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "CloudHSM"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
