// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGroupsForMemberCommand,
  ListGroupsForMemberCommandInput,
  ListGroupsForMemberCommandOutput,
} from "../commands/ListGroupsForMemberCommand";
import { DirectoryServiceDataClient } from "../DirectoryServiceDataClient";
import { DirectoryServiceDataPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroupsForMember: (
  config: DirectoryServiceDataPaginationConfiguration,
  input: ListGroupsForMemberCommandInput,
  ...rest: any[]
) => Paginator<ListGroupsForMemberCommandOutput> = createPaginator<
  DirectoryServiceDataPaginationConfiguration,
  ListGroupsForMemberCommandInput,
  ListGroupsForMemberCommandOutput
>(DirectoryServiceDataClient, ListGroupsForMemberCommand, "NextToken", "NextToken", "MaxResults");
