// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTokenBalancesCommand,
  ListTokenBalancesCommandInput,
  ListTokenBalancesCommandOutput,
} from "../commands/ListTokenBalancesCommand";
import { ManagedBlockchainQueryClient } from "../ManagedBlockchainQueryClient";
import { ManagedBlockchainQueryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTokenBalances: (
  config: ManagedBlockchainQueryPaginationConfiguration,
  input: ListTokenBalancesCommandInput,
  ...rest: any[]
) => Paginator<ListTokenBalancesCommandOutput> = createPaginator<
  ManagedBlockchainQueryPaginationConfiguration,
  ListTokenBalancesCommandInput,
  ListTokenBalancesCommandOutput
>(ManagedBlockchainQueryClient, ListTokenBalancesCommand, "nextToken", "nextToken", "maxResults");
