// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { PricingClientConfig } from "./PricingClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PricingClientConfig) => ({
  apiVersion: "2017-10-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Pricing",
  urlParser: config?.urlParser ?? parseUrl,
});
