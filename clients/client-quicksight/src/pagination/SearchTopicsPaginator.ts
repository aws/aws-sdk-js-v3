// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  SearchTopicsCommand,
  SearchTopicsCommandInput,
  SearchTopicsCommandOutput,
} from "../commands/SearchTopicsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchTopics: (
  config: QuickSightPaginationConfiguration,
  input: SearchTopicsCommandInput,
  ...rest: any[]
) => Paginator<SearchTopicsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  SearchTopicsCommandInput,
  SearchTopicsCommandOutput
>(QuickSightClient, SearchTopicsCommand, "NextToken", "NextToken", "MaxResults");
