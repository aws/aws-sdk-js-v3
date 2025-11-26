// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListBotsCommand, ListBotsCommandInput, ListBotsCommandOutput } from "../commands/ListBotsCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBots: (
  config: LexModelsV2PaginationConfiguration,
  input: ListBotsCommandInput,
  ...rest: any[]
) => Paginator<ListBotsCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListBotsCommandInput,
  ListBotsCommandOutput
>(LexModelsV2Client, ListBotsCommand, "nextToken", "nextToken", "maxResults");
