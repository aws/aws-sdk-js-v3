// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { FMSClientConfig } from "./FMSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: FMSClientConfig) => ({
  apiVersion: "2018-01-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "FMS",
  urlParser: config?.urlParser ?? parseUrl,
});
