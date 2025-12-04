// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInvitationsCommand,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput,
} from "../commands/ListInvitationsCommand";
import { DetectiveClient } from "../DetectiveClient";
import { DetectivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInvitations: (
  config: DetectivePaginationConfiguration,
  input: ListInvitationsCommandInput,
  ...rest: any[]
) => Paginator<ListInvitationsCommandOutput> = createPaginator<
  DetectivePaginationConfiguration,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput
>(DetectiveClient, ListInvitationsCommand, "NextToken", "NextToken", "MaxResults");
