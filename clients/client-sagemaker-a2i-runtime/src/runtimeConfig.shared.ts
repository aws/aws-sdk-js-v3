import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SageMakerA2IRuntimeClientConfig } from "./SageMakerA2IRuntimeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SageMakerA2IRuntimeClientConfig) => ({
  apiVersion: "2019-11-07",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "SageMaker A2I Runtime",
  urlParser: config?.urlParser ?? parseUrl,
});
