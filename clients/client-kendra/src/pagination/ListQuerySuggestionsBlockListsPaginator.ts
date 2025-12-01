// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListQuerySuggestionsBlockListsCommand,
  ListQuerySuggestionsBlockListsCommandInput,
  ListQuerySuggestionsBlockListsCommandOutput,
} from "../commands/ListQuerySuggestionsBlockListsCommand";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQuerySuggestionsBlockLists: (
  config: KendraPaginationConfiguration,
  input: ListQuerySuggestionsBlockListsCommandInput,
  ...rest: any[]
) => Paginator<ListQuerySuggestionsBlockListsCommandOutput> = createPaginator<
  KendraPaginationConfiguration,
  ListQuerySuggestionsBlockListsCommandInput,
  ListQuerySuggestionsBlockListsCommandOutput
>(KendraClient, ListQuerySuggestionsBlockListsCommand, "NextToken", "NextToken", "MaxResults");
