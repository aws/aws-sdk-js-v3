// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTestSetsCommand,
  ListTestSetsCommandInput,
  ListTestSetsCommandOutput,
} from "../commands/ListTestSetsCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestSets: (
  config: LexModelsV2PaginationConfiguration,
  input: ListTestSetsCommandInput,
  ...rest: any[]
) => Paginator<ListTestSetsCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListTestSetsCommandInput,
  ListTestSetsCommandOutput
>(LexModelsV2Client, ListTestSetsCommand, "nextToken", "nextToken", "maxResults");
