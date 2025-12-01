// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGroupMembersCommand,
  ListGroupMembersCommandInput,
  ListGroupMembersCommandOutput,
} from "../commands/ListGroupMembersCommand";
import { DirectoryServiceDataClient } from "../DirectoryServiceDataClient";
import { DirectoryServiceDataPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroupMembers: (
  config: DirectoryServiceDataPaginationConfiguration,
  input: ListGroupMembersCommandInput,
  ...rest: any[]
) => Paginator<ListGroupMembersCommandOutput> = createPaginator<
  DirectoryServiceDataPaginationConfiguration,
  ListGroupMembersCommandInput,
  ListGroupMembersCommandOutput
>(DirectoryServiceDataClient, ListGroupMembersCommand, "NextToken", "NextToken", "MaxResults");
