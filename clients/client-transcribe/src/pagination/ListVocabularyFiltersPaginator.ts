// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListVocabularyFiltersCommand,
  ListVocabularyFiltersCommandInput,
  ListVocabularyFiltersCommandOutput,
} from "../commands/ListVocabularyFiltersCommand";
import { TranscribeClient } from "../TranscribeClient";
import { TranscribePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVocabularyFilters: (
  config: TranscribePaginationConfiguration,
  input: ListVocabularyFiltersCommandInput,
  ...rest: any[]
) => Paginator<ListVocabularyFiltersCommandOutput> = createPaginator<
  TranscribePaginationConfiguration,
  ListVocabularyFiltersCommandInput,
  ListVocabularyFiltersCommandOutput
>(TranscribeClient, ListVocabularyFiltersCommand, "NextToken", "NextToken", "MaxResults");
