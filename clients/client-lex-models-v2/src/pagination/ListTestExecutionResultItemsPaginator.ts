// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTestExecutionResultItemsCommand,
  ListTestExecutionResultItemsCommandInput,
  ListTestExecutionResultItemsCommandOutput,
} from "../commands/ListTestExecutionResultItemsCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestExecutionResultItems: (
  config: LexModelsV2PaginationConfiguration,
  input: ListTestExecutionResultItemsCommandInput,
  ...rest: any[]
) => Paginator<ListTestExecutionResultItemsCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListTestExecutionResultItemsCommandInput,
  ListTestExecutionResultItemsCommandOutput
>(LexModelsV2Client, ListTestExecutionResultItemsCommand, "nextToken", "nextToken", "maxResults");
