// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { DirectoryServiceDataClient } from "../DirectoryServiceDataClient";
import { DirectoryServiceDataPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUsers: (
  config: DirectoryServiceDataPaginationConfiguration,
  input: ListUsersCommandInput,
  ...rest: any[]
) => Paginator<ListUsersCommandOutput> = createPaginator<
  DirectoryServiceDataPaginationConfiguration,
  ListUsersCommandInput,
  ListUsersCommandOutput
>(DirectoryServiceDataClient, ListUsersCommand, "NextToken", "NextToken", "MaxResults");
