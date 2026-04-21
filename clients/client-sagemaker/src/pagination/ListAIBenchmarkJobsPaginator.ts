// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAIBenchmarkJobsCommand,
  ListAIBenchmarkJobsCommandInput,
  ListAIBenchmarkJobsCommandOutput,
} from "../commands/ListAIBenchmarkJobsCommand";
import { SageMakerClient } from "../SageMakerClient";
import type { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAIBenchmarkJobs: (
  config: SageMakerPaginationConfiguration,
  input: ListAIBenchmarkJobsCommandInput,
  ...rest: any[]
) => Paginator<ListAIBenchmarkJobsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListAIBenchmarkJobsCommandInput,
  ListAIBenchmarkJobsCommandOutput
>(SageMakerClient, ListAIBenchmarkJobsCommand, "NextToken", "NextToken", "MaxResults");
