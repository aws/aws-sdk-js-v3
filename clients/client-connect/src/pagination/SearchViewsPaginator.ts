// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { SearchViewsCommand, SearchViewsCommandInput, SearchViewsCommandOutput } from "../commands/SearchViewsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchViews: (
  config: ConnectPaginationConfiguration,
  input: SearchViewsCommandInput,
  ...rest: any[]
) => Paginator<SearchViewsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchViewsCommandInput,
  SearchViewsCommandOutput
>(ConnectClient, SearchViewsCommand, "NextToken", "NextToken", "MaxResults");
