// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListQueueLimitAssociationsCommand,
  ListQueueLimitAssociationsCommandInput,
  ListQueueLimitAssociationsCommandOutput,
} from "../commands/ListQueueLimitAssociationsCommand";
import { DeadlineClient } from "../DeadlineClient";
import type { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQueueLimitAssociations: (
  config: DeadlinePaginationConfiguration,
  input: ListQueueLimitAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListQueueLimitAssociationsCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListQueueLimitAssociationsCommandInput,
  ListQueueLimitAssociationsCommandOutput
>(DeadlineClient, ListQueueLimitAssociationsCommand, "nextToken", "nextToken", "maxResults");
