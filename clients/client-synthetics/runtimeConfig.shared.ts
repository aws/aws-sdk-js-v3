import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SyntheticsClientConfig } from "./SyntheticsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SyntheticsClientConfig) => ({
  apiVersion: "2017-10-11",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "synthetics",
  urlParser: config?.urlParser ?? parseUrl,
});
