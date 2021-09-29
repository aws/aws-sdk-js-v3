import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { TextractClientConfig } from "./TextractClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TextractClientConfig) => ({
  apiVersion: "2018-06-27",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Textract",
  urlParser: config?.urlParser ?? parseUrl,
});
