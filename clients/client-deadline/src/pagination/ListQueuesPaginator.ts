// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListQueuesCommand, ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQueues: (
  config: DeadlinePaginationConfiguration,
  input: ListQueuesCommandInput,
  ...rest: any[]
) => Paginator<ListQueuesCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListQueuesCommandInput,
  ListQueuesCommandOutput
>(DeadlineClient, ListQueuesCommand, "nextToken", "nextToken", "maxResults");
