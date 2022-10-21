// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SMSClientConfig } from "./SMSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SMSClientConfig) => ({
  apiVersion: "2016-10-24",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "SMS",
  urlParser: config?.urlParser ?? parseUrl,
});
