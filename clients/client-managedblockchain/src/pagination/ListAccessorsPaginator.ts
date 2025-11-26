// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccessorsCommand,
  ListAccessorsCommandInput,
  ListAccessorsCommandOutput,
} from "../commands/ListAccessorsCommand";
import { ManagedBlockchainClient } from "../ManagedBlockchainClient";
import { ManagedBlockchainPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessors: (
  config: ManagedBlockchainPaginationConfiguration,
  input: ListAccessorsCommandInput,
  ...rest: any[]
) => Paginator<ListAccessorsCommandOutput> = createPaginator<
  ManagedBlockchainPaginationConfiguration,
  ListAccessorsCommandInput,
  ListAccessorsCommandOutput
>(ManagedBlockchainClient, ListAccessorsCommand, "NextToken", "NextToken", "MaxResults");
