// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AccountAccessRuntimeClient } from "../AccountAccessRuntimeClient";
import { ListRolesCommand, ListRolesCommandInput, ListRolesCommandOutput } from "../commands/ListRolesCommand";
import type { AccountAccessRuntimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRoles: (
  config: AccountAccessRuntimePaginationConfiguration,
  input: ListRolesCommandInput,
  ...rest: any[]
) => Paginator<ListRolesCommandOutput> = createPaginator<
  AccountAccessRuntimePaginationConfiguration,
  ListRolesCommandInput,
  ListRolesCommandOutput
>(AccountAccessRuntimeClient, ListRolesCommand, "nextToken", "nextToken", "maxResults");
