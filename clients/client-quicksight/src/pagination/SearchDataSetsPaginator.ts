// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchDataSetsCommand,
  SearchDataSetsCommandInput,
  SearchDataSetsCommandOutput,
} from "../commands/SearchDataSetsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchDataSets: (
  config: QuickSightPaginationConfiguration,
  input: SearchDataSetsCommandInput,
  ...rest: any[]
) => Paginator<SearchDataSetsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  SearchDataSetsCommandInput,
  SearchDataSetsCommandOutput
>(QuickSightClient, SearchDataSetsCommand, "NextToken", "NextToken", "MaxResults");
