// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMembers: (
  config: SecurityHubPaginationConfiguration,
  input: ListMembersCommandInput,
  ...rest: any[]
) => Paginator<ListMembersCommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  ListMembersCommandInput,
  ListMembersCommandOutput
>(SecurityHubClient, ListMembersCommand, "NextToken", "NextToken", "MaxResults");
