// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUsers: (
  config: ConnectPaginationConfiguration,
  input: ListUsersCommandInput,
  ...rest: any[]
) => Paginator<ListUsersCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListUsersCommandInput,
  ListUsersCommandOutput
>(ConnectClient, ListUsersCommand, "NextToken", "NextToken", "MaxResults");
