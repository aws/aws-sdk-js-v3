// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAppComponentRecommendationsCommand,
  ListAppComponentRecommendationsCommandInput,
  ListAppComponentRecommendationsCommandOutput,
} from "../commands/ListAppComponentRecommendationsCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppComponentRecommendations: (
  config: ResiliencehubPaginationConfiguration,
  input: ListAppComponentRecommendationsCommandInput,
  ...rest: any[]
) => Paginator<ListAppComponentRecommendationsCommandOutput> = createPaginator<
  ResiliencehubPaginationConfiguration,
  ListAppComponentRecommendationsCommandInput,
  ListAppComponentRecommendationsCommandOutput
>(ResiliencehubClient, ListAppComponentRecommendationsCommand, "nextToken", "nextToken", "maxResults");
