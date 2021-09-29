import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ECSClientConfig } from "./ECSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ECSClientConfig) => ({
  apiVersion: "2014-11-13",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "ECS",
  urlParser: config?.urlParser ?? parseUrl,
});
