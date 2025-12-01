// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCommitClient } from "../CodeCommitClient";
import {
  ListBranchesCommand,
  ListBranchesCommandInput,
  ListBranchesCommandOutput,
} from "../commands/ListBranchesCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBranches: (
  config: CodeCommitPaginationConfiguration,
  input: ListBranchesCommandInput,
  ...rest: any[]
) => Paginator<ListBranchesCommandOutput> = createPaginator<
  CodeCommitPaginationConfiguration,
  ListBranchesCommandInput,
  ListBranchesCommandOutput
>(CodeCommitClient, ListBranchesCommand, "nextToken", "nextToken", "");
