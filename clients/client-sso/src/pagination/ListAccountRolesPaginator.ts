// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccountRolesCommand,
  ListAccountRolesCommandInput,
  ListAccountRolesCommandOutput,
} from "../commands/ListAccountRolesCommand";
import { SSOClient } from "../SSOClient";
import { SSOPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccountRoles: (
  config: SSOPaginationConfiguration,
  input: ListAccountRolesCommandInput,
  ...rest: any[]
) => Paginator<ListAccountRolesCommandOutput> = createPaginator<
  SSOPaginationConfiguration,
  ListAccountRolesCommandInput,
  ListAccountRolesCommandOutput
>(SSOClient, ListAccountRolesCommand, "nextToken", "nextToken", "maxResults");
