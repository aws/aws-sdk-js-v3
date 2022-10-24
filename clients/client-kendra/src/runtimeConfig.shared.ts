// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { KendraClientConfig } from "./KendraClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KendraClientConfig) => ({
  apiVersion: "2019-02-03",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "kendra",
  urlParser: config?.urlParser ?? parseUrl,
});
