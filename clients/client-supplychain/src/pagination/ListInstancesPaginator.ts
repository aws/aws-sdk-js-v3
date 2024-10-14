// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListInstancesCommand,
  ListInstancesCommandInput,
  ListInstancesCommandOutput,
} from "../commands/ListInstancesCommand";
import { SupplyChainClient } from "../SupplyChainClient";
import { SupplyChainPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInstances: (
  config: SupplyChainPaginationConfiguration,
  input: ListInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListInstancesCommandOutput> = createPaginator<
  SupplyChainPaginationConfiguration,
  ListInstancesCommandInput,
  ListInstancesCommandOutput
>(SupplyChainClient, ListInstancesCommand, "nextToken", "nextToken", "maxResults");
