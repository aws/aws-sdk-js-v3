// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNetworksCommand,
  ListNetworksCommandInput,
  ListNetworksCommandOutput,
} from "../commands/ListNetworksCommand";
import { ManagedBlockchainClient } from "../ManagedBlockchainClient";
import { ManagedBlockchainPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworks: (
  config: ManagedBlockchainPaginationConfiguration,
  input: ListNetworksCommandInput,
  ...rest: any[]
) => Paginator<ListNetworksCommandOutput> = createPaginator<
  ManagedBlockchainPaginationConfiguration,
  ListNetworksCommandInput,
  ListNetworksCommandOutput
>(ManagedBlockchainClient, ListNetworksCommand, "NextToken", "NextToken", "MaxResults");
