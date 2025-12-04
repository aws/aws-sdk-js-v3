// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTransactionsCommand,
  ListTransactionsCommandInput,
  ListTransactionsCommandOutput,
} from "../commands/ListTransactionsCommand";
import { ManagedBlockchainQueryClient } from "../ManagedBlockchainQueryClient";
import { ManagedBlockchainQueryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTransactions: (
  config: ManagedBlockchainQueryPaginationConfiguration,
  input: ListTransactionsCommandInput,
  ...rest: any[]
) => Paginator<ListTransactionsCommandOutput> = createPaginator<
  ManagedBlockchainQueryPaginationConfiguration,
  ListTransactionsCommandInput,
  ListTransactionsCommandOutput
>(ManagedBlockchainQueryClient, ListTransactionsCommand, "nextToken", "nextToken", "maxResults");
