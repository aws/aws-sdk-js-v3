// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListModelCopyJobsCommand,
  ListModelCopyJobsCommandInput,
  ListModelCopyJobsCommandOutput,
} from "../commands/ListModelCopyJobsCommand";
import { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModelCopyJobs: (
  config: BedrockPaginationConfiguration,
  input: ListModelCopyJobsCommandInput,
  ...rest: any[]
) => Paginator<ListModelCopyJobsCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListModelCopyJobsCommandInput,
  ListModelCopyJobsCommandOutput
>(BedrockClient, ListModelCopyJobsCommand, "nextToken", "nextToken", "maxResults");
