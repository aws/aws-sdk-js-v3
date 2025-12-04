// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCommitClient } from "../CodeCommitClient";
import {
  ListFileCommitHistoryCommand,
  ListFileCommitHistoryCommandInput,
  ListFileCommitHistoryCommandOutput,
} from "../commands/ListFileCommitHistoryCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFileCommitHistory: (
  config: CodeCommitPaginationConfiguration,
  input: ListFileCommitHistoryCommandInput,
  ...rest: any[]
) => Paginator<ListFileCommitHistoryCommandOutput> = createPaginator<
  CodeCommitPaginationConfiguration,
  ListFileCommitHistoryCommandInput,
  ListFileCommitHistoryCommandOutput
>(CodeCommitClient, ListFileCommitHistoryCommand, "nextToken", "nextToken", "maxResults");
