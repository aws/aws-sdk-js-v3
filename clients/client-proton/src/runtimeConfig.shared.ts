// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { ProtonClientConfig } from "./ProtonClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ProtonClientConfig) => ({
  apiVersion: "2020-07-20",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Proton",
  urlParser: config?.urlParser ?? parseUrl,
});
