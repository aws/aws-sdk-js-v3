// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFirewallRulesCommand,
  ListFirewallRulesCommandInput,
  ListFirewallRulesCommandOutput,
} from "../commands/ListFirewallRulesCommand";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFirewallRules: (
  config: Route53ResolverPaginationConfiguration,
  input: ListFirewallRulesCommandInput,
  ...rest: any[]
) => Paginator<ListFirewallRulesCommandOutput> = createPaginator<
  Route53ResolverPaginationConfiguration,
  ListFirewallRulesCommandInput,
  ListFirewallRulesCommandOutput
>(Route53ResolverClient, ListFirewallRulesCommand, "NextToken", "NextToken", "MaxResults");
