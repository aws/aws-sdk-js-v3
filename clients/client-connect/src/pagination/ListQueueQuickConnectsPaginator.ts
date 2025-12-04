// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListQueueQuickConnectsCommand,
  ListQueueQuickConnectsCommandInput,
  ListQueueQuickConnectsCommandOutput,
} from "../commands/ListQueueQuickConnectsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQueueQuickConnects: (
  config: ConnectPaginationConfiguration,
  input: ListQueueQuickConnectsCommandInput,
  ...rest: any[]
) => Paginator<ListQueueQuickConnectsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListQueueQuickConnectsCommandInput,
  ListQueueQuickConnectsCommandOutput
>(ConnectClient, ListQueueQuickConnectsCommand, "NextToken", "NextToken", "MaxResults");
