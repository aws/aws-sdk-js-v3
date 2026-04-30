// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNotebookRunsCommand,
  ListNotebookRunsCommandInput,
  ListNotebookRunsCommandOutput,
} from "../commands/ListNotebookRunsCommand";
import { DataZoneClient } from "../DataZoneClient";
import type { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNotebookRuns: (
  config: DataZonePaginationConfiguration,
  input: ListNotebookRunsCommandInput,
  ...rest: any[]
) => Paginator<ListNotebookRunsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListNotebookRunsCommandInput,
  ListNotebookRunsCommandOutput
>(DataZoneClient, ListNotebookRunsCommand, "nextToken", "nextToken", "maxResults");
