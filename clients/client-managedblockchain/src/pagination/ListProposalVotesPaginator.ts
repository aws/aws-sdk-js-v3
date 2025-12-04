// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProposalVotesCommand,
  ListProposalVotesCommandInput,
  ListProposalVotesCommandOutput,
} from "../commands/ListProposalVotesCommand";
import { ManagedBlockchainClient } from "../ManagedBlockchainClient";
import { ManagedBlockchainPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProposalVotes: (
  config: ManagedBlockchainPaginationConfiguration,
  input: ListProposalVotesCommandInput,
  ...rest: any[]
) => Paginator<ListProposalVotesCommandOutput> = createPaginator<
  ManagedBlockchainPaginationConfiguration,
  ListProposalVotesCommandInput,
  ListProposalVotesCommandOutput
>(ManagedBlockchainClient, ListProposalVotesCommand, "NextToken", "NextToken", "MaxResults");
