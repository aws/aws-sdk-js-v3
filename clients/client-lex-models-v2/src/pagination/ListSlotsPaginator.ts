// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListSlotsCommand, ListSlotsCommandInput, ListSlotsCommandOutput } from "../commands/ListSlotsCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSlots: (
  config: LexModelsV2PaginationConfiguration,
  input: ListSlotsCommandInput,
  ...rest: any[]
) => Paginator<ListSlotsCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListSlotsCommandInput,
  ListSlotsCommandOutput
>(LexModelsV2Client, ListSlotsCommand, "nextToken", "nextToken", "maxResults");
