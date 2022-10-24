// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { PIClientConfig } from "./PIClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PIClientConfig) => ({
  apiVersion: "2018-02-27",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "PI",
  urlParser: config?.urlParser ?? parseUrl,
});
