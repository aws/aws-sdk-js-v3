// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MarketplaceCommerceAnalyticsClientConfig } from "./MarketplaceCommerceAnalyticsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MarketplaceCommerceAnalyticsClientConfig) => ({
  apiVersion: "2015-07-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Marketplace Commerce Analytics",
  urlParser: config?.urlParser ?? parseUrl,
});
