import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { GuardDutyClientConfig } from "./GuardDutyClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GuardDutyClientConfig) => ({
  apiVersion: "2017-11-28",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "GuardDuty",
  urlParser: config?.urlParser ?? parseUrl,
});
