// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInvitationsCommand,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput,
} from "../commands/ListInvitationsCommand";
import { ManagedBlockchainClient } from "../ManagedBlockchainClient";
import { ManagedBlockchainPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInvitations: (
  config: ManagedBlockchainPaginationConfiguration,
  input: ListInvitationsCommandInput,
  ...rest: any[]
) => Paginator<ListInvitationsCommandOutput> = createPaginator<
  ManagedBlockchainPaginationConfiguration,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput
>(ManagedBlockchainClient, ListInvitationsCommand, "NextToken", "NextToken", "MaxResults");
