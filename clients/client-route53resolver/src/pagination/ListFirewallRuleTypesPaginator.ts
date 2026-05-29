// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFirewallRuleTypesCommand,
  ListFirewallRuleTypesCommandInput,
  ListFirewallRuleTypesCommandOutput,
} from "../commands/ListFirewallRuleTypesCommand";
import { Route53ResolverClient } from "../Route53ResolverClient";
import type { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFirewallRuleTypes: (
  config: Route53ResolverPaginationConfiguration,
  input: ListFirewallRuleTypesCommandInput,
  ...rest: any[]
) => Paginator<ListFirewallRuleTypesCommandOutput> = createPaginator<
  Route53ResolverPaginationConfiguration,
  ListFirewallRuleTypesCommandInput,
  ListFirewallRuleTypesCommandOutput
>(Route53ResolverClient, ListFirewallRuleTypesCommand, "NextToken", "NextToken", "MaxResults");
