// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSolNetworkOperationsCommand,
  ListSolNetworkOperationsCommandInput,
  ListSolNetworkOperationsCommandOutput,
} from "../commands/ListSolNetworkOperationsCommand";
import { TnbClient } from "../TnbClient";
import { TnbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSolNetworkOperations: (
  config: TnbPaginationConfiguration,
  input: ListSolNetworkOperationsCommandInput,
  ...rest: any[]
) => Paginator<ListSolNetworkOperationsCommandOutput> = createPaginator<
  TnbPaginationConfiguration,
  ListSolNetworkOperationsCommandInput,
  ListSolNetworkOperationsCommandOutput
>(TnbClient, ListSolNetworkOperationsCommand, "nextToken", "nextToken", "maxResults");
