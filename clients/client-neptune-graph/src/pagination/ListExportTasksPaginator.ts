// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListExportTasksCommand,
  ListExportTasksCommandInput,
  ListExportTasksCommandOutput,
} from "../commands/ListExportTasksCommand";
import { NeptuneGraphClient } from "../NeptuneGraphClient";
import { NeptuneGraphPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExportTasks: (
  config: NeptuneGraphPaginationConfiguration,
  input: ListExportTasksCommandInput,
  ...rest: any[]
) => Paginator<ListExportTasksCommandOutput> = createPaginator<
  NeptuneGraphPaginationConfiguration,
  ListExportTasksCommandInput,
  ListExportTasksCommandOutput
>(NeptuneGraphClient, ListExportTasksCommand, "nextToken", "nextToken", "maxResults");
