import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SSMContactsClientConfig } from "./SSMContactsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SSMContactsClientConfig) => ({
  apiVersion: "2021-05-03",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "SSM Contacts"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
