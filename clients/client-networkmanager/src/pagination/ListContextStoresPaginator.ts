// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContextStoresCommand,
  ListContextStoresCommandInput,
  ListContextStoresCommandOutput,
} from "../commands/ListContextStoresCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import type { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContextStores: (
  config: NetworkManagerPaginationConfiguration,
  input: ListContextStoresCommandInput,
  ...rest: any[]
) => Paginator<ListContextStoresCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  ListContextStoresCommandInput,
  ListContextStoresCommandOutput
>(NetworkManagerClient, ListContextStoresCommand, "NextToken", "NextToken", "MaxResults");
