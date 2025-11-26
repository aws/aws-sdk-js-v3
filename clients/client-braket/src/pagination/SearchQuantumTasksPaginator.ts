// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BraketClient } from "../BraketClient";
import {
  SearchQuantumTasksCommand,
  SearchQuantumTasksCommandInput,
  SearchQuantumTasksCommandOutput,
} from "../commands/SearchQuantumTasksCommand";
import { BraketPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchQuantumTasks: (
  config: BraketPaginationConfiguration,
  input: SearchQuantumTasksCommandInput,
  ...rest: any[]
) => Paginator<SearchQuantumTasksCommandOutput> = createPaginator<
  BraketPaginationConfiguration,
  SearchQuantumTasksCommandInput,
  SearchQuantumTasksCommandOutput
>(BraketClient, SearchQuantumTasksCommand, "nextToken", "nextToken", "maxResults");
