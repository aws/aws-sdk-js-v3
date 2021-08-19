import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SavingsplansClientConfig } from "./SavingsplansClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SavingsplansClientConfig) => ({
  apiVersion: "2019-06-28",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "savingsplans",
  urlParser: config?.urlParser ?? parseUrl,
});
