// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCatalystClient } from "../CodeCatalystClient";
import {
  ListSourceRepositoryBranchesCommand,
  ListSourceRepositoryBranchesCommandInput,
  ListSourceRepositoryBranchesCommandOutput,
} from "../commands/ListSourceRepositoryBranchesCommand";
import { CodeCatalystPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSourceRepositoryBranches: (
  config: CodeCatalystPaginationConfiguration,
  input: ListSourceRepositoryBranchesCommandInput,
  ...rest: any[]
) => Paginator<ListSourceRepositoryBranchesCommandOutput> = createPaginator<
  CodeCatalystPaginationConfiguration,
  ListSourceRepositoryBranchesCommandInput,
  ListSourceRepositoryBranchesCommandOutput
>(CodeCatalystClient, ListSourceRepositoryBranchesCommand, "nextToken", "nextToken", "maxResults");
