// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchGroupsCommand,
  SearchGroupsCommandInput,
  SearchGroupsCommandOutput,
} from "../commands/SearchGroupsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchGroups: (
  config: QuickSightPaginationConfiguration,
  input: SearchGroupsCommandInput,
  ...rest: any[]
) => Paginator<SearchGroupsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  SearchGroupsCommandInput,
  SearchGroupsCommandOutput
>(QuickSightClient, SearchGroupsCommand, "NextToken", "NextToken", "MaxResults");
