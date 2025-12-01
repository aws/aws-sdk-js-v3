// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSessionAnalyticsDataCommand,
  ListSessionAnalyticsDataCommandInput,
  ListSessionAnalyticsDataCommandOutput,
} from "../commands/ListSessionAnalyticsDataCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSessionAnalyticsData: (
  config: LexModelsV2PaginationConfiguration,
  input: ListSessionAnalyticsDataCommandInput,
  ...rest: any[]
) => Paginator<ListSessionAnalyticsDataCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListSessionAnalyticsDataCommandInput,
  ListSessionAnalyticsDataCommandOutput
>(LexModelsV2Client, ListSessionAnalyticsDataCommand, "nextToken", "nextToken", "maxResults");
