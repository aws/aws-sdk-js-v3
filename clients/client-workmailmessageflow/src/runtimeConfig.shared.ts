import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { WorkMailMessageFlowClientConfig } from "./WorkMailMessageFlowClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkMailMessageFlowClientConfig) => ({
  apiVersion: "2019-05-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "WorkMailMessageFlow",
  urlParser: config?.urlParser ?? parseUrl,
});
