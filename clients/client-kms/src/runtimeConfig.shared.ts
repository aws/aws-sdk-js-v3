// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { KMSClientConfig } from "./KMSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KMSClientConfig) => ({
  apiVersion: "2014-11-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "KMS",
  urlParser: config?.urlParser ?? parseUrl,
});
