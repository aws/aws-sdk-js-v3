import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { WorkMailClientConfig } from "./WorkMailClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkMailClientConfig) => ({
  apiVersion: "2017-10-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "WorkMail",
  urlParser: config?.urlParser ?? parseUrl,
});
