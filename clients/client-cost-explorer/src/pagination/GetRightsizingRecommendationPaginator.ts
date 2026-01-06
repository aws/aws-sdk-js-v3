// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetRightsizingRecommendationCommand,
  GetRightsizingRecommendationCommandInput,
  GetRightsizingRecommendationCommandOutput,
} from "../commands/GetRightsizingRecommendationCommand";
import { CostExplorerClient } from "../CostExplorerClient";
import { CostExplorerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetRightsizingRecommendation: (
  config: CostExplorerPaginationConfiguration,
  input: GetRightsizingRecommendationCommandInput,
  ...rest: any[]
) => Paginator<GetRightsizingRecommendationCommandOutput> = createPaginator<
  CostExplorerPaginationConfiguration,
  GetRightsizingRecommendationCommandInput,
  GetRightsizingRecommendationCommandOutput
>(CostExplorerClient, GetRightsizingRecommendationCommand, "NextPageToken", "NextPageToken", "PageSize");
