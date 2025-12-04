// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRuleGroupsCommand,
  ListRuleGroupsCommandInput,
  ListRuleGroupsCommandOutput,
} from "../commands/ListRuleGroupsCommand";
import { NetworkFirewallClient } from "../NetworkFirewallClient";
import { NetworkFirewallPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRuleGroups: (
  config: NetworkFirewallPaginationConfiguration,
  input: ListRuleGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListRuleGroupsCommandOutput> = createPaginator<
  NetworkFirewallPaginationConfiguration,
  ListRuleGroupsCommandInput,
  ListRuleGroupsCommandOutput
>(NetworkFirewallClient, ListRuleGroupsCommand, "NextToken", "NextToken", "MaxResults");
