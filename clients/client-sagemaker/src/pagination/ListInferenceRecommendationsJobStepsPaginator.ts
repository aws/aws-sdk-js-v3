// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInferenceRecommendationsJobStepsCommand,
  ListInferenceRecommendationsJobStepsCommandInput,
  ListInferenceRecommendationsJobStepsCommandOutput,
} from "../commands/ListInferenceRecommendationsJobStepsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInferenceRecommendationsJobSteps: (
  config: SageMakerPaginationConfiguration,
  input: ListInferenceRecommendationsJobStepsCommandInput,
  ...rest: any[]
) => Paginator<ListInferenceRecommendationsJobStepsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListInferenceRecommendationsJobStepsCommandInput,
  ListInferenceRecommendationsJobStepsCommandOutput
>(SageMakerClient, ListInferenceRecommendationsJobStepsCommand, "NextToken", "NextToken", "MaxResults");
