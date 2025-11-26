// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPermissionGroupsCommand,
  ListPermissionGroupsCommandInput,
  ListPermissionGroupsCommandOutput,
} from "../commands/ListPermissionGroupsCommand";
import { FinspaceDataClient } from "../FinspaceDataClient";
import { FinspaceDataPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPermissionGroups: (
  config: FinspaceDataPaginationConfiguration,
  input: ListPermissionGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListPermissionGroupsCommandOutput> = createPaginator<
  FinspaceDataPaginationConfiguration,
  ListPermissionGroupsCommandInput,
  ListPermissionGroupsCommandOutput
>(FinspaceDataClient, ListPermissionGroupsCommand, "nextToken", "nextToken", "maxResults");
