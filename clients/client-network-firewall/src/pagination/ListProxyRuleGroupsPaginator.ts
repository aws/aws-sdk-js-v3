// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListProxyRuleGroupsCommand,
  ListProxyRuleGroupsCommandInput,
  ListProxyRuleGroupsCommandOutput,
} from "../commands/ListProxyRuleGroupsCommand";
import { NetworkFirewallClient } from "../NetworkFirewallClient";
import { NetworkFirewallPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProxyRuleGroups: (
  config: NetworkFirewallPaginationConfiguration,
  input: ListProxyRuleGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListProxyRuleGroupsCommandOutput> = createPaginator<
  NetworkFirewallPaginationConfiguration,
  ListProxyRuleGroupsCommandInput,
  ListProxyRuleGroupsCommandOutput
>(NetworkFirewallClient, ListProxyRuleGroupsCommand, "NextToken", "NextToken", "MaxResults");
