// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListShareInvitationsCommand,
  ListShareInvitationsCommandInput,
  ListShareInvitationsCommandOutput,
} from "../commands/ListShareInvitationsCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListShareInvitations: (
  config: WellArchitectedPaginationConfiguration,
  input: ListShareInvitationsCommandInput,
  ...rest: any[]
) => Paginator<ListShareInvitationsCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListShareInvitationsCommandInput,
  ListShareInvitationsCommandOutput
>(WellArchitectedClient, ListShareInvitationsCommand, "NextToken", "NextToken", "MaxResults");
