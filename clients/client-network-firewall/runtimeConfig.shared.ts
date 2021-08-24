import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { NetworkFirewallClientConfig } from "./NetworkFirewallClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: NetworkFirewallClientConfig) => ({
  apiVersion: "2020-11-12",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Network Firewall",
  urlParser: config?.urlParser ?? parseUrl,
});
