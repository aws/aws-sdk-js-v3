import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { AuditManagerClientConfig } from "./AuditManagerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AuditManagerClientConfig) => ({
  apiVersion: "2017-07-25",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "AuditManager"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
