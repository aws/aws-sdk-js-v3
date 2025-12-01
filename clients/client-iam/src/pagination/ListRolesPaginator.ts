// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListRolesCommand, ListRolesCommandInput, ListRolesCommandOutput } from "../commands/ListRolesCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRoles: (
  config: IAMPaginationConfiguration,
  input: ListRolesCommandInput,
  ...rest: any[]
) => Paginator<ListRolesCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListRolesCommandInput,
  ListRolesCommandOutput
>(IAMClient, ListRolesCommand, "Marker", "Marker", "MaxItems");
