// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListModelImportJobsCommand,
  ListModelImportJobsCommandInput,
  ListModelImportJobsCommandOutput,
} from "../commands/ListModelImportJobsCommand";
import { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModelImportJobs: (
  config: BedrockPaginationConfiguration,
  input: ListModelImportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListModelImportJobsCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListModelImportJobsCommandInput,
  ListModelImportJobsCommandOutput
>(BedrockClient, ListModelImportJobsCommand, "nextToken", "nextToken", "maxResults");
