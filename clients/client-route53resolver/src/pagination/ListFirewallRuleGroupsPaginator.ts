// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFirewallRuleGroupsCommand,
  ListFirewallRuleGroupsCommandInput,
  ListFirewallRuleGroupsCommandOutput,
} from "../commands/ListFirewallRuleGroupsCommand";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFirewallRuleGroups: (
  config: Route53ResolverPaginationConfiguration,
  input: ListFirewallRuleGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListFirewallRuleGroupsCommandOutput> = createPaginator<
  Route53ResolverPaginationConfiguration,
  ListFirewallRuleGroupsCommandInput,
  ListFirewallRuleGroupsCommandOutput
>(Route53ResolverClient, ListFirewallRuleGroupsCommand, "NextToken", "NextToken", "MaxResults");
