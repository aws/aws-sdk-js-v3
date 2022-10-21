// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MTurkClientConfig } from "./MTurkClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MTurkClientConfig) => ({
  apiVersion: "2017-01-17",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "MTurk",
  urlParser: config?.urlParser ?? parseUrl,
});
