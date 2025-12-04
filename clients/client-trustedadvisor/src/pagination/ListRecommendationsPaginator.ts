// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecommendationsCommand,
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "../commands/ListRecommendationsCommand";
import { TrustedAdvisorClient } from "../TrustedAdvisorClient";
import { TrustedAdvisorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecommendations: (
  config: TrustedAdvisorPaginationConfiguration,
  input: ListRecommendationsCommandInput,
  ...rest: any[]
) => Paginator<ListRecommendationsCommandOutput> = createPaginator<
  TrustedAdvisorPaginationConfiguration,
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput
>(TrustedAdvisorClient, ListRecommendationsCommand, "nextToken", "nextToken", "maxResults");
