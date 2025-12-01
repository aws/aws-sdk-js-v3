// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFirewallPoliciesCommand,
  ListFirewallPoliciesCommandInput,
  ListFirewallPoliciesCommandOutput,
} from "../commands/ListFirewallPoliciesCommand";
import { NetworkFirewallClient } from "../NetworkFirewallClient";
import { NetworkFirewallPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFirewallPolicies: (
  config: NetworkFirewallPaginationConfiguration,
  input: ListFirewallPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListFirewallPoliciesCommandOutput> = createPaginator<
  NetworkFirewallPaginationConfiguration,
  ListFirewallPoliciesCommandInput,
  ListFirewallPoliciesCommandOutput
>(NetworkFirewallClient, ListFirewallPoliciesCommand, "NextToken", "NextToken", "MaxResults");
