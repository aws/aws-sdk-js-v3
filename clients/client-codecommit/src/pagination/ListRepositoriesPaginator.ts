// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCommitClient } from "../CodeCommitClient";
import {
  ListRepositoriesCommand,
  ListRepositoriesCommandInput,
  ListRepositoriesCommandOutput,
} from "../commands/ListRepositoriesCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRepositories: (
  config: CodeCommitPaginationConfiguration,
  input: ListRepositoriesCommandInput,
  ...rest: any[]
) => Paginator<ListRepositoriesCommandOutput> = createPaginator<
  CodeCommitPaginationConfiguration,
  ListRepositoriesCommandInput,
  ListRepositoriesCommandOutput
>(CodeCommitClient, ListRepositoriesCommand, "nextToken", "nextToken", "");
