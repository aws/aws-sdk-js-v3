// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListManagedFirewallDomainListsCommand,
  ListManagedFirewallDomainListsCommandInput,
  ListManagedFirewallDomainListsCommandOutput,
} from "../commands/ListManagedFirewallDomainListsCommand";
import { Route53GlobalResolverClient } from "../Route53GlobalResolverClient";
import { Route53GlobalResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedFirewallDomainLists: (
  config: Route53GlobalResolverPaginationConfiguration,
  input: ListManagedFirewallDomainListsCommandInput,
  ...rest: any[]
) => Paginator<ListManagedFirewallDomainListsCommandOutput> = createPaginator<
  Route53GlobalResolverPaginationConfiguration,
  ListManagedFirewallDomainListsCommandInput,
  ListManagedFirewallDomainListsCommandOutput
>(Route53GlobalResolverClient, ListManagedFirewallDomainListsCommand, "nextToken", "nextToken", "maxResults");
