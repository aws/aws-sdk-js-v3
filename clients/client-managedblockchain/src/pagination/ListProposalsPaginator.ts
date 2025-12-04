// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProposalsCommand,
  ListProposalsCommandInput,
  ListProposalsCommandOutput,
} from "../commands/ListProposalsCommand";
import { ManagedBlockchainClient } from "../ManagedBlockchainClient";
import { ManagedBlockchainPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProposals: (
  config: ManagedBlockchainPaginationConfiguration,
  input: ListProposalsCommandInput,
  ...rest: any[]
) => Paginator<ListProposalsCommandOutput> = createPaginator<
  ManagedBlockchainPaginationConfiguration,
  ListProposalsCommandInput,
  ListProposalsCommandOutput
>(ManagedBlockchainClient, ListProposalsCommand, "NextToken", "NextToken", "MaxResults");
