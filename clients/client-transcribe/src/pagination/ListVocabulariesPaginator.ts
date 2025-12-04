// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListVocabulariesCommand,
  ListVocabulariesCommandInput,
  ListVocabulariesCommandOutput,
} from "../commands/ListVocabulariesCommand";
import { TranscribeClient } from "../TranscribeClient";
import { TranscribePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVocabularies: (
  config: TranscribePaginationConfiguration,
  input: ListVocabulariesCommandInput,
  ...rest: any[]
) => Paginator<ListVocabulariesCommandOutput> = createPaginator<
  TranscribePaginationConfiguration,
  ListVocabulariesCommandInput,
  ListVocabulariesCommandOutput
>(TranscribeClient, ListVocabulariesCommand, "NextToken", "NextToken", "MaxResults");
