// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchAllRelatedItemsCommand,
  SearchAllRelatedItemsCommandInput,
  SearchAllRelatedItemsCommandOutput,
} from "../commands/SearchAllRelatedItemsCommand";
import { ConnectCasesClient } from "../ConnectCasesClient";
import { ConnectCasesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchAllRelatedItems: (
  config: ConnectCasesPaginationConfiguration,
  input: SearchAllRelatedItemsCommandInput,
  ...rest: any[]
) => Paginator<SearchAllRelatedItemsCommandOutput> = createPaginator<
  ConnectCasesPaginationConfiguration,
  SearchAllRelatedItemsCommandInput,
  SearchAllRelatedItemsCommandOutput
>(ConnectCasesClient, SearchAllRelatedItemsCommand, "nextToken", "nextToken", "maxResults");
