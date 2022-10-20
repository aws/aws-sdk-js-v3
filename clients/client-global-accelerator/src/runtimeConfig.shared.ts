// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { GlobalAcceleratorClientConfig } from "./GlobalAcceleratorClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GlobalAcceleratorClientConfig) => ({
  apiVersion: "2018-08-08",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Global Accelerator",
  urlParser: config?.urlParser ?? parseUrl,
});
