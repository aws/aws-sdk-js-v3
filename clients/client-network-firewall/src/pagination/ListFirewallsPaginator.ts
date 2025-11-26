// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFirewallsCommand,
  ListFirewallsCommandInput,
  ListFirewallsCommandOutput,
} from "../commands/ListFirewallsCommand";
import { NetworkFirewallClient } from "../NetworkFirewallClient";
import { NetworkFirewallPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFirewalls: (
  config: NetworkFirewallPaginationConfiguration,
  input: ListFirewallsCommandInput,
  ...rest: any[]
) => Paginator<ListFirewallsCommandOutput> = createPaginator<
  NetworkFirewallPaginationConfiguration,
  ListFirewallsCommandInput,
  ListFirewallsCommandOutput
>(NetworkFirewallClient, ListFirewallsCommand, "NextToken", "NextToken", "MaxResults");
