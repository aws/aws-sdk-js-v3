// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAlarmRecommendationsCommand,
  ListAlarmRecommendationsCommandInput,
  ListAlarmRecommendationsCommandOutput,
} from "../commands/ListAlarmRecommendationsCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAlarmRecommendations: (
  config: ResiliencehubPaginationConfiguration,
  input: ListAlarmRecommendationsCommandInput,
  ...rest: any[]
) => Paginator<ListAlarmRecommendationsCommandOutput> = createPaginator<
  ResiliencehubPaginationConfiguration,
  ListAlarmRecommendationsCommandInput,
  ListAlarmRecommendationsCommandOutput
>(ResiliencehubClient, ListAlarmRecommendationsCommand, "nextToken", "nextToken", "maxResults");
