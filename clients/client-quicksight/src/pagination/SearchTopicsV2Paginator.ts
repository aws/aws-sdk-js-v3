// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchTopicsV2Command,
  SearchTopicsV2CommandInput,
  SearchTopicsV2CommandOutput,
} from "../commands/SearchTopicsV2Command";
import { QuickSightClient } from "../QuickSightClient";
import type { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchTopicsV2: (
  config: QuickSightPaginationConfiguration,
  input: SearchTopicsV2CommandInput,
  ...rest: any[]
) => Paginator<SearchTopicsV2CommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  SearchTopicsV2CommandInput,
  SearchTopicsV2CommandOutput
>(QuickSightClient, SearchTopicsV2Command, "NextToken", "NextToken", "MaxResults");
