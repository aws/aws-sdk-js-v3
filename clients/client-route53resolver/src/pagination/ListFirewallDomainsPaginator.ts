// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFirewallDomainsCommand,
  ListFirewallDomainsCommandInput,
  ListFirewallDomainsCommandOutput,
} from "../commands/ListFirewallDomainsCommand";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFirewallDomains: (
  config: Route53ResolverPaginationConfiguration,
  input: ListFirewallDomainsCommandInput,
  ...rest: any[]
) => Paginator<ListFirewallDomainsCommandOutput> = createPaginator<
  Route53ResolverPaginationConfiguration,
  ListFirewallDomainsCommandInput,
  ListFirewallDomainsCommandOutput
>(Route53ResolverClient, ListFirewallDomainsCommand, "NextToken", "NextToken", "MaxResults");
