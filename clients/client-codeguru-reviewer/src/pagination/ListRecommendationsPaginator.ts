// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeGuruReviewerClient } from "../CodeGuruReviewerClient";
import {
  ListRecommendationsCommand,
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "../commands/ListRecommendationsCommand";
import { CodeGuruReviewerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecommendations: (
  config: CodeGuruReviewerPaginationConfiguration,
  input: ListRecommendationsCommandInput,
  ...rest: any[]
) => Paginator<ListRecommendationsCommandOutput> = createPaginator<
  CodeGuruReviewerPaginationConfiguration,
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput
>(CodeGuruReviewerClient, ListRecommendationsCommand, "NextToken", "NextToken", "MaxResults");
