// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SageMakerClientConfig } from "./SageMakerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SageMakerClientConfig) => ({
  apiVersion: "2017-07-24",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "SageMaker",
  urlParser: config?.urlParser ?? parseUrl,
});
