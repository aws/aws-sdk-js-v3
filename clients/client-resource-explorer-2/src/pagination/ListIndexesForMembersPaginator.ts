// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIndexesForMembersCommand,
  ListIndexesForMembersCommandInput,
  ListIndexesForMembersCommandOutput,
} from "../commands/ListIndexesForMembersCommand";
import { ResourceExplorer2Client } from "../ResourceExplorer2Client";
import { ResourceExplorer2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIndexesForMembers: (
  config: ResourceExplorer2PaginationConfiguration,
  input: ListIndexesForMembersCommandInput,
  ...rest: any[]
) => Paginator<ListIndexesForMembersCommandOutput> = createPaginator<
  ResourceExplorer2PaginationConfiguration,
  ListIndexesForMembersCommandInput,
  ListIndexesForMembersCommandOutput
>(ResourceExplorer2Client, ListIndexesForMembersCommand, "NextToken", "NextToken", "MaxResults");
