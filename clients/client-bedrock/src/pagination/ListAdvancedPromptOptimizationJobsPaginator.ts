// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListAdvancedPromptOptimizationJobsCommand,
  ListAdvancedPromptOptimizationJobsCommandInput,
  ListAdvancedPromptOptimizationJobsCommandOutput,
} from "../commands/ListAdvancedPromptOptimizationJobsCommand";
import type { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAdvancedPromptOptimizationJobs: (
  config: BedrockPaginationConfiguration,
  input: ListAdvancedPromptOptimizationJobsCommandInput,
  ...rest: any[]
) => Paginator<ListAdvancedPromptOptimizationJobsCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListAdvancedPromptOptimizationJobsCommandInput,
  ListAdvancedPromptOptimizationJobsCommandOutput
>(BedrockClient, ListAdvancedPromptOptimizationJobsCommand, "nextToken", "nextToken", "maxResults");
