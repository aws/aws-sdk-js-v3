// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSolNetworkInstancesCommand,
  ListSolNetworkInstancesCommandInput,
  ListSolNetworkInstancesCommandOutput,
} from "../commands/ListSolNetworkInstancesCommand";
import { TnbClient } from "../TnbClient";
import { TnbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSolNetworkInstances: (
  config: TnbPaginationConfiguration,
  input: ListSolNetworkInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListSolNetworkInstancesCommandOutput> = createPaginator<
  TnbPaginationConfiguration,
  ListSolNetworkInstancesCommandInput,
  ListSolNetworkInstancesCommandOutput
>(TnbClient, ListSolNetworkInstancesCommand, "nextToken", "nextToken", "maxResults");
