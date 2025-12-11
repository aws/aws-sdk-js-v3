// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFirewallDomainListsCommand,
  ListFirewallDomainListsCommandInput,
  ListFirewallDomainListsCommandOutput,
} from "../commands/ListFirewallDomainListsCommand";
import { Route53GlobalResolverClient } from "../Route53GlobalResolverClient";
import { Route53GlobalResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFirewallDomainLists: (
  config: Route53GlobalResolverPaginationConfiguration,
  input: ListFirewallDomainListsCommandInput,
  ...rest: any[]
) => Paginator<ListFirewallDomainListsCommandOutput> = createPaginator<
  Route53GlobalResolverPaginationConfiguration,
  ListFirewallDomainListsCommandInput,
  ListFirewallDomainListsCommandOutput
>(Route53GlobalResolverClient, ListFirewallDomainListsCommand, "nextToken", "nextToken", "maxResults");
