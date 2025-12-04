// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUsers: (
  config: QuickSightPaginationConfiguration,
  input: ListUsersCommandInput,
  ...rest: any[]
) => Paginator<ListUsersCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListUsersCommandInput,
  ListUsersCommandOutput
>(QuickSightClient, ListUsersCommand, "NextToken", "NextToken", "MaxResults");
