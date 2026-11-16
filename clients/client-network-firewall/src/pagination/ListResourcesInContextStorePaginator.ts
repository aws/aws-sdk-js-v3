// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourcesInContextStoreCommand,
  ListResourcesInContextStoreCommandInput,
  ListResourcesInContextStoreCommandOutput,
} from "../commands/ListResourcesInContextStoreCommand";
import { NetworkFirewallClient } from "../NetworkFirewallClient";
import type { NetworkFirewallPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourcesInContextStore: (
  config: NetworkFirewallPaginationConfiguration,
  input: ListResourcesInContextStoreCommandInput,
  ...rest: any[]
) => Paginator<ListResourcesInContextStoreCommandOutput> = createPaginator<
  NetworkFirewallPaginationConfiguration,
  ListResourcesInContextStoreCommandInput,
  ListResourcesInContextStoreCommandOutput
>(NetworkFirewallClient, ListResourcesInContextStoreCommand, "NextToken", "NextToken", "MaxResults");
