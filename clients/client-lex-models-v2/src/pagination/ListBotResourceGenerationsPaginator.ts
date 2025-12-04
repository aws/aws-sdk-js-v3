// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBotResourceGenerationsCommand,
  ListBotResourceGenerationsCommandInput,
  ListBotResourceGenerationsCommandOutput,
} from "../commands/ListBotResourceGenerationsCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBotResourceGenerations: (
  config: LexModelsV2PaginationConfiguration,
  input: ListBotResourceGenerationsCommandInput,
  ...rest: any[]
) => Paginator<ListBotResourceGenerationsCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListBotResourceGenerationsCommandInput,
  ListBotResourceGenerationsCommandOutput
>(LexModelsV2Client, ListBotResourceGenerationsCommand, "nextToken", "nextToken", "maxResults");
