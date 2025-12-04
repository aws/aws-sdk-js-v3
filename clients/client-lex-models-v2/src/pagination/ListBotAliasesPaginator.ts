// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBotAliasesCommand,
  ListBotAliasesCommandInput,
  ListBotAliasesCommandOutput,
} from "../commands/ListBotAliasesCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBotAliases: (
  config: LexModelsV2PaginationConfiguration,
  input: ListBotAliasesCommandInput,
  ...rest: any[]
) => Paginator<ListBotAliasesCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListBotAliasesCommandInput,
  ListBotAliasesCommandOutput
>(LexModelsV2Client, ListBotAliasesCommand, "nextToken", "nextToken", "maxResults");
