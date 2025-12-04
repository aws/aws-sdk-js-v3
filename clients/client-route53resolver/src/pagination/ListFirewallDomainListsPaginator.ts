// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFirewallDomainListsCommand,
  ListFirewallDomainListsCommandInput,
  ListFirewallDomainListsCommandOutput,
} from "../commands/ListFirewallDomainListsCommand";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFirewallDomainLists: (
  config: Route53ResolverPaginationConfiguration,
  input: ListFirewallDomainListsCommandInput,
  ...rest: any[]
) => Paginator<ListFirewallDomainListsCommandOutput> = createPaginator<
  Route53ResolverPaginationConfiguration,
  ListFirewallDomainListsCommandInput,
  ListFirewallDomainListsCommandOutput
>(Route53ResolverClient, ListFirewallDomainListsCommand, "NextToken", "NextToken", "MaxResults");
