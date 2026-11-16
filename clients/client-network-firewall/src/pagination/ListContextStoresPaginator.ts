// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContextStoresCommand,
  ListContextStoresCommandInput,
  ListContextStoresCommandOutput,
} from "../commands/ListContextStoresCommand";
import { NetworkFirewallClient } from "../NetworkFirewallClient";
import type { NetworkFirewallPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContextStores: (
  config: NetworkFirewallPaginationConfiguration,
  input: ListContextStoresCommandInput,
  ...rest: any[]
) => Paginator<ListContextStoresCommandOutput> = createPaginator<
  NetworkFirewallPaginationConfiguration,
  ListContextStoresCommandInput,
  ListContextStoresCommandOutput
>(NetworkFirewallClient, ListContextStoresCommand, "NextToken", "NextToken", "MaxResults");
