// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBotVersionsCommand,
  ListBotVersionsCommandInput,
  ListBotVersionsCommandOutput,
} from "../commands/ListBotVersionsCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBotVersions: (
  config: LexModelsV2PaginationConfiguration,
  input: ListBotVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListBotVersionsCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListBotVersionsCommandInput,
  ListBotVersionsCommandOutput
>(LexModelsV2Client, ListBotVersionsCommand, "nextToken", "nextToken", "maxResults");
