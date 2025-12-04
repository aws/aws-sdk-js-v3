// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCustomVocabularyItemsCommand,
  ListCustomVocabularyItemsCommandInput,
  ListCustomVocabularyItemsCommandOutput,
} from "../commands/ListCustomVocabularyItemsCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomVocabularyItems: (
  config: LexModelsV2PaginationConfiguration,
  input: ListCustomVocabularyItemsCommandInput,
  ...rest: any[]
) => Paginator<ListCustomVocabularyItemsCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListCustomVocabularyItemsCommandInput,
  ListCustomVocabularyItemsCommandOutput
>(LexModelsV2Client, ListCustomVocabularyItemsCommand, "nextToken", "nextToken", "maxResults");
