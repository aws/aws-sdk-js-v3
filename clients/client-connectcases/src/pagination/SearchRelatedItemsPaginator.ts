// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchRelatedItemsCommand,
  SearchRelatedItemsCommandInput,
  SearchRelatedItemsCommandOutput,
} from "../commands/SearchRelatedItemsCommand";
import { ConnectCasesClient } from "../ConnectCasesClient";
import { ConnectCasesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchRelatedItems: (
  config: ConnectCasesPaginationConfiguration,
  input: SearchRelatedItemsCommandInput,
  ...rest: any[]
) => Paginator<SearchRelatedItemsCommandOutput> = createPaginator<
  ConnectCasesPaginationConfiguration,
  SearchRelatedItemsCommandInput,
  SearchRelatedItemsCommandOutput
>(ConnectCasesClient, SearchRelatedItemsCommand, "nextToken", "nextToken", "maxResults");
