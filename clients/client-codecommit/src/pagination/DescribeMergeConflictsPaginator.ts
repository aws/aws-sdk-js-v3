// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCommitClient } from "../CodeCommitClient";
import {
  DescribeMergeConflictsCommand,
  DescribeMergeConflictsCommandInput,
  DescribeMergeConflictsCommandOutput,
} from "../commands/DescribeMergeConflictsCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMergeConflicts: (
  config: CodeCommitPaginationConfiguration,
  input: DescribeMergeConflictsCommandInput,
  ...rest: any[]
) => Paginator<DescribeMergeConflictsCommandOutput> = createPaginator<
  CodeCommitPaginationConfiguration,
  DescribeMergeConflictsCommandInput,
  DescribeMergeConflictsCommandOutput
>(CodeCommitClient, DescribeMergeConflictsCommand, "nextToken", "nextToken", "maxMergeHunks");
