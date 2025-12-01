// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTestSetRecordsCommand,
  ListTestSetRecordsCommandInput,
  ListTestSetRecordsCommandOutput,
} from "../commands/ListTestSetRecordsCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestSetRecords: (
  config: LexModelsV2PaginationConfiguration,
  input: ListTestSetRecordsCommandInput,
  ...rest: any[]
) => Paginator<ListTestSetRecordsCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListTestSetRecordsCommandInput,
  ListTestSetRecordsCommandOutput
>(LexModelsV2Client, ListTestSetRecordsCommand, "nextToken", "nextToken", "maxResults");
