// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInvitationsCommand,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput,
} from "../commands/ListInvitationsCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInvitations: (
  config: SecurityHubPaginationConfiguration,
  input: ListInvitationsCommandInput,
  ...rest: any[]
) => Paginator<ListInvitationsCommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput
>(SecurityHubClient, ListInvitationsCommand, "NextToken", "NextToken", "MaxResults");
