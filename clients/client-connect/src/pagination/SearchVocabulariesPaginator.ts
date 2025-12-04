// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchVocabulariesCommand,
  SearchVocabulariesCommandInput,
  SearchVocabulariesCommandOutput,
} from "../commands/SearchVocabulariesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchVocabularies: (
  config: ConnectPaginationConfiguration,
  input: SearchVocabulariesCommandInput,
  ...rest: any[]
) => Paginator<SearchVocabulariesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchVocabulariesCommandInput,
  SearchVocabulariesCommandOutput
>(ConnectClient, SearchVocabulariesCommand, "NextToken", "NextToken", "MaxResults");
