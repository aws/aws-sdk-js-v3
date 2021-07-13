import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ConnectContactLensClientConfig } from "./ConnectContactLensClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ConnectContactLensClientConfig) => ({
  apiVersion: "2020-08-21",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Connect Contact Lens"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
