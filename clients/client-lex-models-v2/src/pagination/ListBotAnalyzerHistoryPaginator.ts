// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBotAnalyzerHistoryCommand,
  ListBotAnalyzerHistoryCommandInput,
  ListBotAnalyzerHistoryCommandOutput,
} from "../commands/ListBotAnalyzerHistoryCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import type { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBotAnalyzerHistory: (
  config: LexModelsV2PaginationConfiguration,
  input: ListBotAnalyzerHistoryCommandInput,
  ...rest: any[]
) => Paginator<ListBotAnalyzerHistoryCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListBotAnalyzerHistoryCommandInput,
  ListBotAnalyzerHistoryCommandOutput
>(LexModelsV2Client, ListBotAnalyzerHistoryCommand, "nextToken", "nextToken", "maxResults");
