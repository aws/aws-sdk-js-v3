// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { GreengrassClientConfig } from "./GreengrassClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GreengrassClientConfig) => ({
  apiVersion: "2017-06-07",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Greengrass",
  urlParser: config?.urlParser ?? parseUrl,
});
