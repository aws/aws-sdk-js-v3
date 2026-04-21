// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAIRecommendationJobsCommand,
  ListAIRecommendationJobsCommandInput,
  ListAIRecommendationJobsCommandOutput,
} from "../commands/ListAIRecommendationJobsCommand";
import { SageMakerClient } from "../SageMakerClient";
import type { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAIRecommendationJobs: (
  config: SageMakerPaginationConfiguration,
  input: ListAIRecommendationJobsCommandInput,
  ...rest: any[]
) => Paginator<ListAIRecommendationJobsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListAIRecommendationJobsCommandInput,
  ListAIRecommendationJobsCommandOutput
>(SageMakerClient, ListAIRecommendationJobsCommand, "NextToken", "NextToken", "MaxResults");
