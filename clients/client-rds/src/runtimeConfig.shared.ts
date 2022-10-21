// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { RDSClientConfig } from "./RDSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RDSClientConfig) => ({
  apiVersion: "2014-10-31",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "RDS",
  urlParser: config?.urlParser ?? parseUrl,
});
