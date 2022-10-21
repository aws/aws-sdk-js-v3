// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { STSClientConfig } from "./STSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: STSClientConfig) => ({
  apiVersion: "2011-06-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "STS",
  urlParser: config?.urlParser ?? parseUrl,
});
