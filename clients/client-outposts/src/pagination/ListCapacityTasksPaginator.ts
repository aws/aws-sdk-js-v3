// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCapacityTasksCommand,
  ListCapacityTasksCommandInput,
  ListCapacityTasksCommandOutput,
} from "../commands/ListCapacityTasksCommand";
import { OutpostsClient } from "../OutpostsClient";
import { OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCapacityTasks: (
  config: OutpostsPaginationConfiguration,
  input: ListCapacityTasksCommandInput,
  ...rest: any[]
) => Paginator<ListCapacityTasksCommandOutput> = createPaginator<
  OutpostsPaginationConfiguration,
  ListCapacityTasksCommandInput,
  ListCapacityTasksCommandOutput
>(OutpostsClient, ListCapacityTasksCommand, "NextToken", "NextToken", "MaxResults");
