// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SSMIncidentsClientConfig } from "./SSMIncidentsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SSMIncidentsClientConfig) => ({
  apiVersion: "2018-05-10",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "SSM Incidents",
  urlParser: config?.urlParser ?? parseUrl,
});
