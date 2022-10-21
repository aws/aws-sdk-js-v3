// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { IAMClientConfig } from "./IAMClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IAMClientConfig) => ({
  apiVersion: "2010-05-08",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "IAM",
  urlParser: config?.urlParser ?? parseUrl,
});
