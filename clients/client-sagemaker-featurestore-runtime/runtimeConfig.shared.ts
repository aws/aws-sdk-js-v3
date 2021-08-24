import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SageMakerFeatureStoreRuntimeClientConfig } from "./SageMakerFeatureStoreRuntimeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SageMakerFeatureStoreRuntimeClientConfig) => ({
  apiVersion: "2020-07-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "SageMaker FeatureStore Runtime",
  urlParser: config?.urlParser ?? parseUrl,
});
