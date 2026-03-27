// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecommendationResourcesCommand,
  ListRecommendationResourcesCommandInput,
  ListRecommendationResourcesCommandOutput,
} from "../commands/ListRecommendationResourcesCommand";
import { TrustedAdvisorClient } from "../TrustedAdvisorClient";
import type { TrustedAdvisorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecommendationResources: (
  config: TrustedAdvisorPaginationConfiguration,
  input: ListRecommendationResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListRecommendationResourcesCommandOutput> = createPaginator<
  TrustedAdvisorPaginationConfiguration,
  ListRecommendationResourcesCommandInput,
  ListRecommendationResourcesCommandOutput
>(TrustedAdvisorClient, ListRecommendationResourcesCommand, "nextToken", "nextToken", "maxResults");
