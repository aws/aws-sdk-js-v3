// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssetContractsCommand,
  ListAssetContractsCommandInput,
  ListAssetContractsCommandOutput,
} from "../commands/ListAssetContractsCommand";
import { ManagedBlockchainQueryClient } from "../ManagedBlockchainQueryClient";
import { ManagedBlockchainQueryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssetContracts: (
  config: ManagedBlockchainQueryPaginationConfiguration,
  input: ListAssetContractsCommandInput,
  ...rest: any[]
) => Paginator<ListAssetContractsCommandOutput> = createPaginator<
  ManagedBlockchainQueryPaginationConfiguration,
  ListAssetContractsCommandInput,
  ListAssetContractsCommandOutput
>(ManagedBlockchainQueryClient, ListAssetContractsCommand, "nextToken", "nextToken", "maxResults");
