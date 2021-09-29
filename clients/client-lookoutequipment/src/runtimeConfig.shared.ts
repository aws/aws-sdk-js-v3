import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { LookoutEquipmentClientConfig } from "./LookoutEquipmentClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LookoutEquipmentClientConfig) => ({
  apiVersion: "2020-12-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "LookoutEquipment",
  urlParser: config?.urlParser ?? parseUrl,
});
