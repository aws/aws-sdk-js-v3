import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { EC2InstanceConnectClientConfig } from "./EC2InstanceConnectClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EC2InstanceConnectClientConfig) => ({
  apiVersion: "2018-04-02",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "EC2 Instance Connect",
  urlParser: config?.urlParser ?? parseUrl,
});
