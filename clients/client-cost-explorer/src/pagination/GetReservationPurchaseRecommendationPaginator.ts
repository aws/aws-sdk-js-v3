// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetReservationPurchaseRecommendationCommand,
  GetReservationPurchaseRecommendationCommandInput,
  GetReservationPurchaseRecommendationCommandOutput,
} from "../commands/GetReservationPurchaseRecommendationCommand";
import { CostExplorerClient } from "../CostExplorerClient";
import { CostExplorerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetReservationPurchaseRecommendation: (
  config: CostExplorerPaginationConfiguration,
  input: GetReservationPurchaseRecommendationCommandInput,
  ...rest: any[]
) => Paginator<GetReservationPurchaseRecommendationCommandOutput> = createPaginator<
  CostExplorerPaginationConfiguration,
  GetReservationPurchaseRecommendationCommandInput,
  GetReservationPurchaseRecommendationCommandOutput
>(CostExplorerClient, GetReservationPurchaseRecommendationCommand, "NextPageToken", "NextPageToken", "PageSize");
