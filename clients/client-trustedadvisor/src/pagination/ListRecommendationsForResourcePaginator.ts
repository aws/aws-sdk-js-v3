// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecommendationsForResourceCommand,
  ListRecommendationsForResourceCommandInput,
  ListRecommendationsForResourceCommandOutput,
} from "../commands/ListRecommendationsForResourceCommand";
import { TrustedAdvisorClient } from "../TrustedAdvisorClient";
import type { TrustedAdvisorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecommendationsForResource: (
  config: TrustedAdvisorPaginationConfiguration,
  input: ListRecommendationsForResourceCommandInput,
  ...rest: any[]
) => Paginator<ListRecommendationsForResourceCommandOutput> = createPaginator<
  TrustedAdvisorPaginationConfiguration,
  ListRecommendationsForResourceCommandInput,
  ListRecommendationsForResourceCommandOutput
>(TrustedAdvisorClient, ListRecommendationsForResourceCommand, "nextToken", "nextToken", "maxResults");
