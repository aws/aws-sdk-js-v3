// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  SearchGroupsCommand,
  SearchGroupsCommandInput,
  SearchGroupsCommandOutput,
} from "../commands/SearchGroupsCommand";
import { DirectoryServiceDataClient } from "../DirectoryServiceDataClient";
import { DirectoryServiceDataPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchGroups: (
  config: DirectoryServiceDataPaginationConfiguration,
  input: SearchGroupsCommandInput,
  ...rest: any[]
) => Paginator<SearchGroupsCommandOutput> = createPaginator<
  DirectoryServiceDataPaginationConfiguration,
  SearchGroupsCommandInput,
  SearchGroupsCommandOutput
>(DirectoryServiceDataClient, SearchGroupsCommand, "NextToken", "NextToken", "MaxResults");
