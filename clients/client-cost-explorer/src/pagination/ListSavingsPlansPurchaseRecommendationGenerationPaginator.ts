// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSavingsPlansPurchaseRecommendationGenerationCommand,
  ListSavingsPlansPurchaseRecommendationGenerationCommandInput,
  ListSavingsPlansPurchaseRecommendationGenerationCommandOutput,
} from "../commands/ListSavingsPlansPurchaseRecommendationGenerationCommand";
import { CostExplorerClient } from "../CostExplorerClient";
import { CostExplorerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSavingsPlansPurchaseRecommendationGeneration: (
  config: CostExplorerPaginationConfiguration,
  input: ListSavingsPlansPurchaseRecommendationGenerationCommandInput,
  ...rest: any[]
) => Paginator<ListSavingsPlansPurchaseRecommendationGenerationCommandOutput> = createPaginator<
  CostExplorerPaginationConfiguration,
  ListSavingsPlansPurchaseRecommendationGenerationCommandInput,
  ListSavingsPlansPurchaseRecommendationGenerationCommandOutput
>(CostExplorerClient, ListSavingsPlansPurchaseRecommendationGenerationCommand, "NextPageToken", "NextPageToken", "PageSize");
