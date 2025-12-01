// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInvitationsCommand,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput,
} from "../commands/ListInvitationsCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInvitations: (
  config: Macie2PaginationConfiguration,
  input: ListInvitationsCommandInput,
  ...rest: any[]
) => Paginator<ListInvitationsCommandOutput> = createPaginator<
  Macie2PaginationConfiguration,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput
>(Macie2Client, ListInvitationsCommand, "nextToken", "nextToken", "maxResults");
