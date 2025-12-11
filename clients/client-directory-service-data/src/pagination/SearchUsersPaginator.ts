// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { SearchUsersCommand, SearchUsersCommandInput, SearchUsersCommandOutput } from "../commands/SearchUsersCommand";
import { DirectoryServiceDataClient } from "../DirectoryServiceDataClient";
import { DirectoryServiceDataPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchUsers: (
  config: DirectoryServiceDataPaginationConfiguration,
  input: SearchUsersCommandInput,
  ...rest: any[]
) => Paginator<SearchUsersCommandOutput> = createPaginator<
  DirectoryServiceDataPaginationConfiguration,
  SearchUsersCommandInput,
  SearchUsersCommandOutput
>(DirectoryServiceDataClient, SearchUsersCommand, "NextToken", "NextToken", "MaxResults");
