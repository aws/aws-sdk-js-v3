// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListProxiesCommand, ListProxiesCommandInput, ListProxiesCommandOutput } from "../commands/ListProxiesCommand";
import { NetworkFirewallClient } from "../NetworkFirewallClient";
import { NetworkFirewallPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProxies: (
  config: NetworkFirewallPaginationConfiguration,
  input: ListProxiesCommandInput,
  ...rest: any[]
) => Paginator<ListProxiesCommandOutput> = createPaginator<
  NetworkFirewallPaginationConfiguration,
  ListProxiesCommandInput,
  ListProxiesCommandOutput
>(NetworkFirewallClient, ListProxiesCommand, "NextToken", "NextToken", "MaxResults");
