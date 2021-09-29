import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MediaStoreClientConfig } from "./MediaStoreClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaStoreClientConfig) => ({
  apiVersion: "2017-09-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "MediaStore",
  urlParser: config?.urlParser ?? parseUrl,
});
