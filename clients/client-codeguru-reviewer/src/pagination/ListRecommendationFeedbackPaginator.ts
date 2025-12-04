// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeGuruReviewerClient } from "../CodeGuruReviewerClient";
import {
  ListRecommendationFeedbackCommand,
  ListRecommendationFeedbackCommandInput,
  ListRecommendationFeedbackCommandOutput,
} from "../commands/ListRecommendationFeedbackCommand";
import { CodeGuruReviewerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecommendationFeedback: (
  config: CodeGuruReviewerPaginationConfiguration,
  input: ListRecommendationFeedbackCommandInput,
  ...rest: any[]
) => Paginator<ListRecommendationFeedbackCommandOutput> = createPaginator<
  CodeGuruReviewerPaginationConfiguration,
  ListRecommendationFeedbackCommandInput,
  ListRecommendationFeedbackCommandOutput
>(CodeGuruReviewerClient, ListRecommendationFeedbackCommand, "NextToken", "NextToken", "MaxResults");
