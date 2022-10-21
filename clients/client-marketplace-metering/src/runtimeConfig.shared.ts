// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MarketplaceMeteringClientConfig } from "./MarketplaceMeteringClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MarketplaceMeteringClientConfig) => ({
  apiVersion: "2016-01-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Marketplace Metering",
  urlParser: config?.urlParser ?? parseUrl,
});
