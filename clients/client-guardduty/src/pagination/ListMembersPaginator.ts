// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMembers: (
  config: GuardDutyPaginationConfiguration,
  input: ListMembersCommandInput,
  ...rest: any[]
) => Paginator<ListMembersCommandOutput> = createPaginator<
  GuardDutyPaginationConfiguration,
  ListMembersCommandInput,
  ListMembersCommandOutput
>(GuardDutyClient, ListMembersCommand, "NextToken", "NextToken", "MaxResults");
