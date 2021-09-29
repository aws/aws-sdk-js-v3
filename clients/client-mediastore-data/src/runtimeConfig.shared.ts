import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MediaStoreDataClientConfig } from "./MediaStoreDataClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaStoreDataClientConfig) => ({
  apiVersion: "2017-09-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "MediaStore Data",
  urlParser: config?.urlParser ?? parseUrl,
});
