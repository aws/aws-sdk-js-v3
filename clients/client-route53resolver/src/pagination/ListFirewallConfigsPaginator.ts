// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFirewallConfigsCommand,
  ListFirewallConfigsCommandInput,
  ListFirewallConfigsCommandOutput,
} from "../commands/ListFirewallConfigsCommand";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { Route53ResolverPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFirewallConfigs: (
  config: Route53ResolverPaginationConfiguration,
  input: ListFirewallConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListFirewallConfigsCommandOutput> = createPaginator<
  Route53ResolverPaginationConfiguration,
  ListFirewallConfigsCommandInput,
  ListFirewallConfigsCommandOutput
>(Route53ResolverClient, ListFirewallConfigsCommand, "NextToken", "NextToken", "MaxResults");
