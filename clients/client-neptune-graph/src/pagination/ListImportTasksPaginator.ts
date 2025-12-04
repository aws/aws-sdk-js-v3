// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListImportTasksCommand,
  ListImportTasksCommandInput,
  ListImportTasksCommandOutput,
} from "../commands/ListImportTasksCommand";
import { NeptuneGraphClient } from "../NeptuneGraphClient";
import { NeptuneGraphPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImportTasks: (
  config: NeptuneGraphPaginationConfiguration,
  input: ListImportTasksCommandInput,
  ...rest: any[]
) => Paginator<ListImportTasksCommandOutput> = createPaginator<
  NeptuneGraphPaginationConfiguration,
  ListImportTasksCommandInput,
  ListImportTasksCommandOutput
>(NeptuneGraphClient, ListImportTasksCommand, "nextToken", "nextToken", "maxResults");
