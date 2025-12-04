// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInferenceRecommendationsJobsCommand,
  ListInferenceRecommendationsJobsCommandInput,
  ListInferenceRecommendationsJobsCommandOutput,
} from "../commands/ListInferenceRecommendationsJobsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInferenceRecommendationsJobs: (
  config: SageMakerPaginationConfiguration,
  input: ListInferenceRecommendationsJobsCommandInput,
  ...rest: any[]
) => Paginator<ListInferenceRecommendationsJobsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListInferenceRecommendationsJobsCommandInput,
  ListInferenceRecommendationsJobsCommandOutput
>(SageMakerClient, ListInferenceRecommendationsJobsCommand, "NextToken", "NextToken", "MaxResults");
