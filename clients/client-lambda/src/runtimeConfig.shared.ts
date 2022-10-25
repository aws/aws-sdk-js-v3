// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { LambdaClientConfig } from "./LambdaClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LambdaClientConfig) => ({
  apiVersion: "2015-03-31",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Lambda",
  urlParser: config?.urlParser ?? parseUrl,
});
