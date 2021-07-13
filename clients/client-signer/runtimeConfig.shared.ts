import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SignerClientConfig } from "./SignerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SignerClientConfig) => ({
  apiVersion: "2017-08-25",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "signer"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
