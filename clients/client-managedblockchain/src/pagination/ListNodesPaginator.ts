// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListNodesCommand, ListNodesCommandInput, ListNodesCommandOutput } from "../commands/ListNodesCommand";
import { ManagedBlockchainClient } from "../ManagedBlockchainClient";
import { ManagedBlockchainPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNodes: (
  config: ManagedBlockchainPaginationConfiguration,
  input: ListNodesCommandInput,
  ...rest: any[]
) => Paginator<ListNodesCommandOutput> = createPaginator<
  ManagedBlockchainPaginationConfiguration,
  ListNodesCommandInput,
  ListNodesCommandOutput
>(ManagedBlockchainClient, ListNodesCommand, "NextToken", "NextToken", "MaxResults");
