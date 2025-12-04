// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGroupMembershipsCommand,
  ListGroupMembershipsCommandInput,
  ListGroupMembershipsCommandOutput,
} from "../commands/ListGroupMembershipsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroupMemberships: (
  config: QuickSightPaginationConfiguration,
  input: ListGroupMembershipsCommandInput,
  ...rest: any[]
) => Paginator<ListGroupMembershipsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListGroupMembershipsCommandInput,
  ListGroupMembershipsCommandOutput
>(QuickSightClient, ListGroupMembershipsCommand, "NextToken", "NextToken", "MaxResults");
