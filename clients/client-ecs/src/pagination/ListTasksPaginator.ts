// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListTasksCommand, ListTasksCommandInput, ListTasksCommandOutput } from "../commands/ListTasksCommand";
import { ECSClient } from "../ECSClient";
import { ECSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTasks: (
  config: ECSPaginationConfiguration,
  input: ListTasksCommandInput,
  ...rest: any[]
) => Paginator<ListTasksCommandOutput> = createPaginator<
  ECSPaginationConfiguration,
  ListTasksCommandInput,
  ListTasksCommandOutput
>(ECSClient, ListTasksCommand, "nextToken", "nextToken", "maxResults");
