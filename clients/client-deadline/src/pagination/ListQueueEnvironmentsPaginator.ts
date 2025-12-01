// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListQueueEnvironmentsCommand,
  ListQueueEnvironmentsCommandInput,
  ListQueueEnvironmentsCommandOutput,
} from "../commands/ListQueueEnvironmentsCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQueueEnvironments: (
  config: DeadlinePaginationConfiguration,
  input: ListQueueEnvironmentsCommandInput,
  ...rest: any[]
) => Paginator<ListQueueEnvironmentsCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListQueueEnvironmentsCommandInput,
  ListQueueEnvironmentsCommandOutput
>(DeadlineClient, ListQueueEnvironmentsCommand, "nextToken", "nextToken", "maxResults");
