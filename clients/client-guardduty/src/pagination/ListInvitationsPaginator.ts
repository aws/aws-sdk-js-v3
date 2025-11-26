// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInvitationsCommand,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput,
} from "../commands/ListInvitationsCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInvitations: (
  config: GuardDutyPaginationConfiguration,
  input: ListInvitationsCommandInput,
  ...rest: any[]
) => Paginator<ListInvitationsCommandOutput> = createPaginator<
  GuardDutyPaginationConfiguration,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput
>(GuardDutyClient, ListInvitationsCommand, "NextToken", "NextToken", "MaxResults");
