import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MediaPackageClientConfig } from "./MediaPackageClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaPackageClientConfig) => ({
  apiVersion: "2017-10-12",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "MediaPackage",
  urlParser: config?.urlParser ?? parseUrl,
});
