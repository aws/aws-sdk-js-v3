// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { SearchUsersCommand, SearchUsersCommandInput, SearchUsersCommandOutput } from "../commands/SearchUsersCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchUsers: (
  config: ConnectPaginationConfiguration,
  input: SearchUsersCommandInput,
  ...rest: any[]
) => Paginator<SearchUsersCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchUsersCommandInput,
  SearchUsersCommandOutput
>(ConnectClient, SearchUsersCommand, "NextToken", "NextToken", "MaxResults");
