// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRoleMembershipsCommand,
  ListRoleMembershipsCommandInput,
  ListRoleMembershipsCommandOutput,
} from "../commands/ListRoleMembershipsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRoleMemberships: (
  config: QuickSightPaginationConfiguration,
  input: ListRoleMembershipsCommandInput,
  ...rest: any[]
) => Paginator<ListRoleMembershipsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListRoleMembershipsCommandInput,
  ListRoleMembershipsCommandOutput
>(QuickSightClient, ListRoleMembershipsCommand, "NextToken", "NextToken", "MaxResults");
