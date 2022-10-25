// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SavingsplansClientConfig } from "./SavingsplansClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SavingsplansClientConfig) => ({
  apiVersion: "2019-06-28",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "savingsplans",
  urlParser: config?.urlParser ?? parseUrl,
});
