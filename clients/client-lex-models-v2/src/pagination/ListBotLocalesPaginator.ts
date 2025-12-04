// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBotLocalesCommand,
  ListBotLocalesCommandInput,
  ListBotLocalesCommandOutput,
} from "../commands/ListBotLocalesCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBotLocales: (
  config: LexModelsV2PaginationConfiguration,
  input: ListBotLocalesCommandInput,
  ...rest: any[]
) => Paginator<ListBotLocalesCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListBotLocalesCommandInput,
  ListBotLocalesCommandOutput
>(LexModelsV2Client, ListBotLocalesCommand, "nextToken", "nextToken", "maxResults");
