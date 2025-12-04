// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRecommendationExportJobsCommand,
  DescribeRecommendationExportJobsCommandInput,
  DescribeRecommendationExportJobsCommandOutput,
} from "../commands/DescribeRecommendationExportJobsCommand";
import { ComputeOptimizerClient } from "../ComputeOptimizerClient";
import { ComputeOptimizerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRecommendationExportJobs: (
  config: ComputeOptimizerPaginationConfiguration,
  input: DescribeRecommendationExportJobsCommandInput,
  ...rest: any[]
) => Paginator<DescribeRecommendationExportJobsCommandOutput> = createPaginator<
  ComputeOptimizerPaginationConfiguration,
  DescribeRecommendationExportJobsCommandInput,
  DescribeRecommendationExportJobsCommandOutput
>(ComputeOptimizerClient, DescribeRecommendationExportJobsCommand, "nextToken", "nextToken", "maxResults");
