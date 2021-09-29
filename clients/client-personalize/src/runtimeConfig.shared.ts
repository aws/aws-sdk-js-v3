import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { PersonalizeClientConfig } from "./PersonalizeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PersonalizeClientConfig) => ({
  apiVersion: "2018-05-22",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Personalize",
  urlParser: config?.urlParser ?? parseUrl,
});
