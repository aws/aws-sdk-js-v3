import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IdentitystoreClientConfig } from "./IdentitystoreClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IdentitystoreClientConfig) => ({
  apiVersion: "2020-06-15",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "identitystore"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
