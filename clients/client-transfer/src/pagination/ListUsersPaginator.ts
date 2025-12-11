// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { TransferClient } from "../TransferClient";
import { TransferPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUsers: (
  config: TransferPaginationConfiguration,
  input: ListUsersCommandInput,
  ...rest: any[]
) => Paginator<ListUsersCommandOutput> = createPaginator<
  TransferPaginationConfiguration,
  ListUsersCommandInput,
  ListUsersCommandOutput
>(TransferClient, ListUsersCommand, "NextToken", "NextToken", "MaxResults");
