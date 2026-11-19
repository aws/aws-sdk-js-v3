// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFirewallRuleDomainsCommand,
  ListFirewallRuleDomainsCommandInput,
  ListFirewallRuleDomainsCommandOutput,
} from "../commands/ListFirewallRuleDomainsCommand";
import { Route53ResolverClient } from "../Route53ResolverClient";
import type { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFirewallRuleDomains: (
  config: Route53ResolverPaginationConfiguration,
  input: ListFirewallRuleDomainsCommandInput,
  ...rest: any[]
) => Paginator<ListFirewallRuleDomainsCommandOutput> = createPaginator<
  Route53ResolverPaginationConfiguration,
  ListFirewallRuleDomainsCommandInput,
  ListFirewallRuleDomainsCommandOutput
>(Route53ResolverClient, ListFirewallRuleDomainsCommand, "NextToken", "NextToken", "MaxResults");
