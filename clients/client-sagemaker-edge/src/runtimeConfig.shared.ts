import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SagemakerEdgeClientConfig } from "./SagemakerEdgeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SagemakerEdgeClientConfig) => ({
  apiVersion: "2020-09-23",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Sagemaker Edge",
  urlParser: config?.urlParser ?? parseUrl,
});
