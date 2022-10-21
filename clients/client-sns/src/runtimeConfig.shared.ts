// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SNSClientConfig } from "./SNSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SNSClientConfig) => ({
  apiVersion: "2010-03-31",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "SNS",
  urlParser: config?.urlParser ?? parseUrl,
});
