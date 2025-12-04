// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAggregatedUtterancesCommand,
  ListAggregatedUtterancesCommandInput,
  ListAggregatedUtterancesCommandOutput,
} from "../commands/ListAggregatedUtterancesCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAggregatedUtterances: (
  config: LexModelsV2PaginationConfiguration,
  input: ListAggregatedUtterancesCommandInput,
  ...rest: any[]
) => Paginator<ListAggregatedUtterancesCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListAggregatedUtterancesCommandInput,
  ListAggregatedUtterancesCommandOutput
>(LexModelsV2Client, ListAggregatedUtterancesCommand, "nextToken", "nextToken", "maxResults");
