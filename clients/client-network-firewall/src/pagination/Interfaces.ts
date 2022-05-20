// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { NetworkFirewall } from "../NetworkFirewall";
import { NetworkFirewallClient } from "../NetworkFirewallClient";

export interface NetworkFirewallPaginationConfiguration extends PaginationConfiguration {
  client: NetworkFirewall | NetworkFirewallClient;
}
