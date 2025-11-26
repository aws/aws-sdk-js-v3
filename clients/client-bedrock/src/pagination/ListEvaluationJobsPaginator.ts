// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListEvaluationJobsCommand,
  ListEvaluationJobsCommandInput,
  ListEvaluationJobsCommandOutput,
} from "../commands/ListEvaluationJobsCommand";
import { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEvaluationJobs: (
  config: BedrockPaginationConfiguration,
  input: ListEvaluationJobsCommandInput,
  ...rest: any[]
) => Paginator<ListEvaluationJobsCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListEvaluationJobsCommandInput,
  ListEvaluationJobsCommandOutput
>(BedrockClient, ListEvaluationJobsCommand, "nextToken", "nextToken", "maxResults");
