import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { BudgetsClientConfig } from "./BudgetsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: BudgetsClientConfig) => ({
  apiVersion: "2016-10-20",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Budgets",
  urlParser: config?.urlParser ?? parseUrl,
});
