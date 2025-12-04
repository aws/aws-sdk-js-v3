// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecommendationsCommand,
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
} from "../commands/ListRecommendationsCommand";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecommendations: (
  config: DevOpsGuruPaginationConfiguration,
  input: ListRecommendationsCommandInput,
  ...rest: any[]
) => Paginator<ListRecommendationsCommandOutput> = createPaginator<
  DevOpsGuruPaginationConfiguration,
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput
>(DevOpsGuruClient, ListRecommendationsCommand, "NextToken", "NextToken", "");
