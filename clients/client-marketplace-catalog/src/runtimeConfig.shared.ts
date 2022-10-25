// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MarketplaceCatalogClientConfig } from "./MarketplaceCatalogClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MarketplaceCatalogClientConfig) => ({
  apiVersion: "2018-09-17",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Marketplace Catalog",
  urlParser: config?.urlParser ?? parseUrl,
});
