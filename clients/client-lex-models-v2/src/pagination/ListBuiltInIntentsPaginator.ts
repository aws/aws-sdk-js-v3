// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBuiltInIntentsCommand,
  ListBuiltInIntentsCommandInput,
  ListBuiltInIntentsCommandOutput,
} from "../commands/ListBuiltInIntentsCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBuiltInIntents: (
  config: LexModelsV2PaginationConfiguration,
  input: ListBuiltInIntentsCommandInput,
  ...rest: any[]
) => Paginator<ListBuiltInIntentsCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListBuiltInIntentsCommandInput,
  ListBuiltInIntentsCommandOutput
>(LexModelsV2Client, ListBuiltInIntentsCommand, "nextToken", "nextToken", "maxResults");
