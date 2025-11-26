// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeBuildClient } from "../CodeBuildClient";
import {
  ListBuildBatchesForProjectCommand,
  ListBuildBatchesForProjectCommandInput,
  ListBuildBatchesForProjectCommandOutput,
} from "../commands/ListBuildBatchesForProjectCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBuildBatchesForProject: (
  config: CodeBuildPaginationConfiguration,
  input: ListBuildBatchesForProjectCommandInput,
  ...rest: any[]
) => Paginator<ListBuildBatchesForProjectCommandOutput> = createPaginator<
  CodeBuildPaginationConfiguration,
  ListBuildBatchesForProjectCommandInput,
  ListBuildBatchesForProjectCommandOutput
>(CodeBuildClient, ListBuildBatchesForProjectCommand, "nextToken", "nextToken", "maxResults");
