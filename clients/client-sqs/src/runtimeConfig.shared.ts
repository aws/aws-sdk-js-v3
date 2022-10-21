// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SQSClientConfig } from "./SQSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SQSClientConfig) => ({
  apiVersion: "2012-11-05",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "SQS",
  urlParser: config?.urlParser ?? parseUrl,
});
