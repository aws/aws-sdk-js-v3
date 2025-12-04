// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListImpersonationRolesCommand,
  ListImpersonationRolesCommandInput,
  ListImpersonationRolesCommandOutput,
} from "../commands/ListImpersonationRolesCommand";
import { WorkMailClient } from "../WorkMailClient";
import { WorkMailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImpersonationRoles: (
  config: WorkMailPaginationConfiguration,
  input: ListImpersonationRolesCommandInput,
  ...rest: any[]
) => Paginator<ListImpersonationRolesCommandOutput> = createPaginator<
  WorkMailPaginationConfiguration,
  ListImpersonationRolesCommandInput,
  ListImpersonationRolesCommandOutput
>(WorkMailClient, ListImpersonationRolesCommand, "NextToken", "NextToken", "MaxResults");
