// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPendingInvitationResourcesCommand,
  ListPendingInvitationResourcesCommandInput,
  ListPendingInvitationResourcesCommandOutput,
} from "../commands/ListPendingInvitationResourcesCommand";
import { RAMClient } from "../RAMClient";
import { RAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPendingInvitationResources: (
  config: RAMPaginationConfiguration,
  input: ListPendingInvitationResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListPendingInvitationResourcesCommandOutput> = createPaginator<
  RAMPaginationConfiguration,
  ListPendingInvitationResourcesCommandInput,
  ListPendingInvitationResourcesCommandOutput
>(RAMClient, ListPendingInvitationResourcesCommand, "nextToken", "nextToken", "maxResults");
