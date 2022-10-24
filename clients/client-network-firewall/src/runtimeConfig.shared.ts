// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { NetworkFirewallClientConfig } from "./NetworkFirewallClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: NetworkFirewallClientConfig) => ({
  apiVersion: "2020-11-12",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Network Firewall",
  urlParser: config?.urlParser ?? parseUrl,
});
