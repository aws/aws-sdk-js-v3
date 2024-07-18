// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  SearchUserHierarchyGroupsCommand,
  SearchUserHierarchyGroupsCommandInput,
  SearchUserHierarchyGroupsCommandOutput,
} from "../commands/SearchUserHierarchyGroupsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchUserHierarchyGroups: (
  config: ConnectPaginationConfiguration,
  input: SearchUserHierarchyGroupsCommandInput,
  ...rest: any[]
) => Paginator<SearchUserHierarchyGroupsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchUserHierarchyGroupsCommandInput,
  SearchUserHierarchyGroupsCommandOutput
>(ConnectClient, SearchUserHierarchyGroupsCommand, "NextToken", "NextToken", "MaxResults");
