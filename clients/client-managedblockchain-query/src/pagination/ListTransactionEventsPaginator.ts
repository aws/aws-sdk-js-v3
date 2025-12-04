// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTransactionEventsCommand,
  ListTransactionEventsCommandInput,
  ListTransactionEventsCommandOutput,
} from "../commands/ListTransactionEventsCommand";
import { ManagedBlockchainQueryClient } from "../ManagedBlockchainQueryClient";
import { ManagedBlockchainQueryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTransactionEvents: (
  config: ManagedBlockchainQueryPaginationConfiguration,
  input: ListTransactionEventsCommandInput,
  ...rest: any[]
) => Paginator<ListTransactionEventsCommandOutput> = createPaginator<
  ManagedBlockchainQueryPaginationConfiguration,
  ListTransactionEventsCommandInput,
  ListTransactionEventsCommandOutput
>(ManagedBlockchainQueryClient, ListTransactionEventsCommand, "nextToken", "nextToken", "maxResults");
