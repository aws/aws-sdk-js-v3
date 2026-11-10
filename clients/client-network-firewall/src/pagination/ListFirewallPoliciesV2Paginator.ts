// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFirewallPoliciesV2Command,
  ListFirewallPoliciesV2CommandInput,
  ListFirewallPoliciesV2CommandOutput,
} from "../commands/ListFirewallPoliciesV2Command";
import { NetworkFirewallClient } from "../NetworkFirewallClient";
import type { NetworkFirewallPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFirewallPoliciesV2: (
  config: NetworkFirewallPaginationConfiguration,
  input: ListFirewallPoliciesV2CommandInput,
  ...rest: any[]
) => Paginator<ListFirewallPoliciesV2CommandOutput> = createPaginator<
  NetworkFirewallPaginationConfiguration,
  ListFirewallPoliciesV2CommandInput,
  ListFirewallPoliciesV2CommandOutput
>(NetworkFirewallClient, ListFirewallPoliciesV2Command, "NextToken", "NextToken", "MaxResults");
