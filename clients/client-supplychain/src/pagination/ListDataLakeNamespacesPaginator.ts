// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataLakeNamespacesCommand,
  ListDataLakeNamespacesCommandInput,
  ListDataLakeNamespacesCommandOutput,
} from "../commands/ListDataLakeNamespacesCommand";
import { SupplyChainClient } from "../SupplyChainClient";
import { SupplyChainPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataLakeNamespaces: (
  config: SupplyChainPaginationConfiguration,
  input: ListDataLakeNamespacesCommandInput,
  ...rest: any[]
) => Paginator<ListDataLakeNamespacesCommandOutput> = createPaginator<
  SupplyChainPaginationConfiguration,
  ListDataLakeNamespacesCommandInput,
  ListDataLakeNamespacesCommandOutput
>(SupplyChainClient, ListDataLakeNamespacesCommand, "nextToken", "nextToken", "maxResults");
