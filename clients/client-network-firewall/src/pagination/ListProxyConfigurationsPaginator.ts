// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListProxyConfigurationsCommand,
  ListProxyConfigurationsCommandInput,
  ListProxyConfigurationsCommandOutput,
} from "../commands/ListProxyConfigurationsCommand";
import { NetworkFirewallClient } from "../NetworkFirewallClient";
import { NetworkFirewallPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProxyConfigurations: (
  config: NetworkFirewallPaginationConfiguration,
  input: ListProxyConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListProxyConfigurationsCommandOutput> = createPaginator<
  NetworkFirewallPaginationConfiguration,
  ListProxyConfigurationsCommandInput,
  ListProxyConfigurationsCommandOutput
>(NetworkFirewallClient, ListProxyConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
