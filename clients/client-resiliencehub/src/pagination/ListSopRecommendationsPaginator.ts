// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSopRecommendationsCommand,
  ListSopRecommendationsCommandInput,
  ListSopRecommendationsCommandOutput,
} from "../commands/ListSopRecommendationsCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSopRecommendations: (
  config: ResiliencehubPaginationConfiguration,
  input: ListSopRecommendationsCommandInput,
  ...rest: any[]
) => Paginator<ListSopRecommendationsCommandOutput> = createPaginator<
  ResiliencehubPaginationConfiguration,
  ListSopRecommendationsCommandInput,
  ListSopRecommendationsCommandOutput
>(ResiliencehubClient, ListSopRecommendationsCommand, "nextToken", "nextToken", "maxResults");
