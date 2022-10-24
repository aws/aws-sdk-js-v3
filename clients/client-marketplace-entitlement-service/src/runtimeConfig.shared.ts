// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MarketplaceEntitlementServiceClientConfig } from "./MarketplaceEntitlementServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MarketplaceEntitlementServiceClientConfig) => ({
  apiVersion: "2017-01-11",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Marketplace Entitlement Service",
  urlParser: config?.urlParser ?? parseUrl,
});
