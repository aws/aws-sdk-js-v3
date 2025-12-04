// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTestRecommendationsCommand,
  ListTestRecommendationsCommandInput,
  ListTestRecommendationsCommandOutput,
} from "../commands/ListTestRecommendationsCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestRecommendations: (
  config: ResiliencehubPaginationConfiguration,
  input: ListTestRecommendationsCommandInput,
  ...rest: any[]
) => Paginator<ListTestRecommendationsCommandOutput> = createPaginator<
  ResiliencehubPaginationConfiguration,
  ListTestRecommendationsCommandInput,
  ListTestRecommendationsCommandOutput
>(ResiliencehubClient, ListTestRecommendationsCommand, "nextToken", "nextToken", "maxResults");
