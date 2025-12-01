// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListFirewallRulesCommand,
  ListFirewallRulesCommandInput,
  ListFirewallRulesCommandOutput,
} from "../commands/ListFirewallRulesCommand";
import { Route53GlobalResolverClient } from "../Route53GlobalResolverClient";
import { Route53GlobalResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFirewallRules: (
  config: Route53GlobalResolverPaginationConfiguration,
  input: ListFirewallRulesCommandInput,
  ...rest: any[]
) => Paginator<ListFirewallRulesCommandOutput> = createPaginator<
  Route53GlobalResolverPaginationConfiguration,
  ListFirewallRulesCommandInput,
  ListFirewallRulesCommandOutput
>(Route53GlobalResolverClient, ListFirewallRulesCommand, "nextToken", "nextToken", "maxResults");
