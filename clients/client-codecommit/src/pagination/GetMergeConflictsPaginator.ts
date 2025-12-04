// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCommitClient } from "../CodeCommitClient";
import {
  GetMergeConflictsCommand,
  GetMergeConflictsCommandInput,
  GetMergeConflictsCommandOutput,
} from "../commands/GetMergeConflictsCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetMergeConflicts: (
  config: CodeCommitPaginationConfiguration,
  input: GetMergeConflictsCommandInput,
  ...rest: any[]
) => Paginator<GetMergeConflictsCommandOutput> = createPaginator<
  CodeCommitPaginationConfiguration,
  GetMergeConflictsCommandInput,
  GetMergeConflictsCommandOutput
>(CodeCommitClient, GetMergeConflictsCommand, "nextToken", "nextToken", "maxConflictFiles");
