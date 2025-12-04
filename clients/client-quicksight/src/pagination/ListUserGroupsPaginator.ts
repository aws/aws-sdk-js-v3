// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListUserGroupsCommand,
  ListUserGroupsCommandInput,
  ListUserGroupsCommandOutput,
} from "../commands/ListUserGroupsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUserGroups: (
  config: QuickSightPaginationConfiguration,
  input: ListUserGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListUserGroupsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListUserGroupsCommandInput,
  ListUserGroupsCommandOutput
>(QuickSightClient, ListUserGroupsCommand, "NextToken", "NextToken", "MaxResults");
