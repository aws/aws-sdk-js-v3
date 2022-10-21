// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MachineLearningClientConfig } from "./MachineLearningClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MachineLearningClientConfig) => ({
  apiVersion: "2014-12-12",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Machine Learning",
  urlParser: config?.urlParser ?? parseUrl,
});
