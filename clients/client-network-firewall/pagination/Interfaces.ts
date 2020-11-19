import { NetworkFirewall } from "../NetworkFirewall";
import { NetworkFirewallClient } from "../NetworkFirewallClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface NetworkFirewallPaginationConfiguration extends PaginationConfiguration {
  client: NetworkFirewall | NetworkFirewallClient;
}
