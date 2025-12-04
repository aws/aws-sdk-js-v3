// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOptimizationJobsCommand,
  ListOptimizationJobsCommandInput,
  ListOptimizationJobsCommandOutput,
} from "../commands/ListOptimizationJobsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOptimizationJobs: (
  config: SageMakerPaginationConfiguration,
  input: ListOptimizationJobsCommandInput,
  ...rest: any[]
) => Paginator<ListOptimizationJobsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListOptimizationJobsCommandInput,
  ListOptimizationJobsCommandOutput
>(SageMakerClient, ListOptimizationJobsCommand, "NextToken", "NextToken", "MaxResults");
