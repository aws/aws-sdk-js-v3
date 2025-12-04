// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListUtteranceAnalyticsDataCommand,
  ListUtteranceAnalyticsDataCommandInput,
  ListUtteranceAnalyticsDataCommandOutput,
} from "../commands/ListUtteranceAnalyticsDataCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUtteranceAnalyticsData: (
  config: LexModelsV2PaginationConfiguration,
  input: ListUtteranceAnalyticsDataCommandInput,
  ...rest: any[]
) => Paginator<ListUtteranceAnalyticsDataCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListUtteranceAnalyticsDataCommandInput,
  ListUtteranceAnalyticsDataCommandOutput
>(LexModelsV2Client, ListUtteranceAnalyticsDataCommand, "nextToken", "nextToken", "maxResults");
