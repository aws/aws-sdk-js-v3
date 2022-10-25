// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SageMakerFeatureStoreRuntimeClientConfig } from "./SageMakerFeatureStoreRuntimeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SageMakerFeatureStoreRuntimeClientConfig) => ({
  apiVersion: "2020-07-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "SageMaker FeatureStore Runtime",
  urlParser: config?.urlParser ?? parseUrl,
});
