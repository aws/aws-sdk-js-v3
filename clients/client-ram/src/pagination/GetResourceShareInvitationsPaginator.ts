// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetResourceShareInvitationsCommand,
  GetResourceShareInvitationsCommandInput,
  GetResourceShareInvitationsCommandOutput,
} from "../commands/GetResourceShareInvitationsCommand";
import { RAMClient } from "../RAMClient";
import { RAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetResourceShareInvitations: (
  config: RAMPaginationConfiguration,
  input: GetResourceShareInvitationsCommandInput,
  ...rest: any[]
) => Paginator<GetResourceShareInvitationsCommandOutput> = createPaginator<
  RAMPaginationConfiguration,
  GetResourceShareInvitationsCommandInput,
  GetResourceShareInvitationsCommandOutput
>(RAMClient, GetResourceShareInvitationsCommand, "nextToken", "nextToken", "maxResults");
