// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFilteredTransactionEventsCommand,
  ListFilteredTransactionEventsCommandInput,
  ListFilteredTransactionEventsCommandOutput,
} from "../commands/ListFilteredTransactionEventsCommand";
import { ManagedBlockchainQueryClient } from "../ManagedBlockchainQueryClient";
import { ManagedBlockchainQueryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFilteredTransactionEvents: (
  config: ManagedBlockchainQueryPaginationConfiguration,
  input: ListFilteredTransactionEventsCommandInput,
  ...rest: any[]
) => Paginator<ListFilteredTransactionEventsCommandOutput> = createPaginator<
  ManagedBlockchainQueryPaginationConfiguration,
  ListFilteredTransactionEventsCommandInput,
  ListFilteredTransactionEventsCommandOutput
>(ManagedBlockchainQueryClient, ListFilteredTransactionEventsCommand, "nextToken", "nextToken", "maxResults");
