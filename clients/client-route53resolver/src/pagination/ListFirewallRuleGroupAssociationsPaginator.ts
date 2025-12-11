// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFirewallRuleGroupAssociationsCommand,
  ListFirewallRuleGroupAssociationsCommandInput,
  ListFirewallRuleGroupAssociationsCommandOutput,
} from "../commands/ListFirewallRuleGroupAssociationsCommand";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFirewallRuleGroupAssociations: (
  config: Route53ResolverPaginationConfiguration,
  input: ListFirewallRuleGroupAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListFirewallRuleGroupAssociationsCommandOutput> = createPaginator<
  Route53ResolverPaginationConfiguration,
  ListFirewallRuleGroupAssociationsCommandInput,
  ListFirewallRuleGroupAssociationsCommandOutput
>(Route53ResolverClient, ListFirewallRuleGroupAssociationsCommand, "NextToken", "NextToken", "MaxResults");
