// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourceGroupingRecommendationsCommand,
  ListResourceGroupingRecommendationsCommandInput,
  ListResourceGroupingRecommendationsCommandOutput,
} from "../commands/ListResourceGroupingRecommendationsCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceGroupingRecommendations: (
  config: ResiliencehubPaginationConfiguration,
  input: ListResourceGroupingRecommendationsCommandInput,
  ...rest: any[]
) => Paginator<ListResourceGroupingRecommendationsCommandOutput> = createPaginator<
  ResiliencehubPaginationConfiguration,
  ListResourceGroupingRecommendationsCommandInput,
  ListResourceGroupingRecommendationsCommandOutput
>(ResiliencehubClient, ListResourceGroupingRecommendationsCommand, "nextToken", "nextToken", "maxResults");
