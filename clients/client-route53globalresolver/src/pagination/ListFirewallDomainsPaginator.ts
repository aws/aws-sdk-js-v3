// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFirewallDomainsCommand,
  ListFirewallDomainsCommandInput,
  ListFirewallDomainsCommandOutput,
} from "../commands/ListFirewallDomainsCommand";
import { Route53GlobalResolverClient } from "../Route53GlobalResolverClient";
import { Route53GlobalResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFirewallDomains: (
  config: Route53GlobalResolverPaginationConfiguration,
  input: ListFirewallDomainsCommandInput,
  ...rest: any[]
) => Paginator<ListFirewallDomainsCommandOutput> = createPaginator<
  Route53GlobalResolverPaginationConfiguration,
  ListFirewallDomainsCommandInput,
  ListFirewallDomainsCommandOutput
>(Route53GlobalResolverClient, ListFirewallDomainsCommand, "nextToken", "nextToken", "maxResults");
