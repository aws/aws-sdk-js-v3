// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListIntentsCommand, ListIntentsCommandInput, ListIntentsCommandOutput } from "../commands/ListIntentsCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIntents: (
  config: LexModelsV2PaginationConfiguration,
  input: ListIntentsCommandInput,
  ...rest: any[]
) => Paginator<ListIntentsCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListIntentsCommandInput,
  ListIntentsCommandOutput
>(LexModelsV2Client, ListIntentsCommand, "nextToken", "nextToken", "maxResults");
