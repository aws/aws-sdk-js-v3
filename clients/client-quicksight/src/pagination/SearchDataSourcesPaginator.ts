// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchDataSourcesCommand,
  SearchDataSourcesCommandInput,
  SearchDataSourcesCommandOutput,
} from "../commands/SearchDataSourcesCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchDataSources: (
  config: QuickSightPaginationConfiguration,
  input: SearchDataSourcesCommandInput,
  ...rest: any[]
) => Paginator<SearchDataSourcesCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  SearchDataSourcesCommandInput,
  SearchDataSourcesCommandOutput
>(QuickSightClient, SearchDataSourcesCommand, "NextToken", "NextToken", "MaxResults");
