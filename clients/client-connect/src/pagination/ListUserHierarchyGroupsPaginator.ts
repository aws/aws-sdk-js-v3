// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListUserHierarchyGroupsCommand,
  ListUserHierarchyGroupsCommandInput,
  ListUserHierarchyGroupsCommandOutput,
} from "../commands/ListUserHierarchyGroupsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUserHierarchyGroups: (
  config: ConnectPaginationConfiguration,
  input: ListUserHierarchyGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListUserHierarchyGroupsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListUserHierarchyGroupsCommandInput,
  ListUserHierarchyGroupsCommandOutput
>(ConnectClient, ListUserHierarchyGroupsCommand, "NextToken", "NextToken", "MaxResults");
