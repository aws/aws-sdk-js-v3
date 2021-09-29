import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { BackupClientConfig } from "./BackupClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: BackupClientConfig) => ({
  apiVersion: "2018-11-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Backup",
  urlParser: config?.urlParser ?? parseUrl,
});
