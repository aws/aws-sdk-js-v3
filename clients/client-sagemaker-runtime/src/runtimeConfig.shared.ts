import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SageMakerRuntimeClientConfig } from "./SageMakerRuntimeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SageMakerRuntimeClientConfig) => ({
  apiVersion: "2017-05-13",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "SageMaker Runtime",
  urlParser: config?.urlParser ?? parseUrl,
});
