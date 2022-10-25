// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { WellArchitectedClientConfig } from "./WellArchitectedClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WellArchitectedClientConfig) => ({
  apiVersion: "2020-03-31",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "WellArchitected",
  urlParser: config?.urlParser ?? parseUrl,
});
