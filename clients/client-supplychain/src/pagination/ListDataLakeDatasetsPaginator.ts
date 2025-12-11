// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataLakeDatasetsCommand,
  ListDataLakeDatasetsCommandInput,
  ListDataLakeDatasetsCommandOutput,
} from "../commands/ListDataLakeDatasetsCommand";
import { SupplyChainClient } from "../SupplyChainClient";
import { SupplyChainPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataLakeDatasets: (
  config: SupplyChainPaginationConfiguration,
  input: ListDataLakeDatasetsCommandInput,
  ...rest: any[]
) => Paginator<ListDataLakeDatasetsCommandOutput> = createPaginator<
  SupplyChainPaginationConfiguration,
  ListDataLakeDatasetsCommandInput,
  ListDataLakeDatasetsCommandOutput
>(SupplyChainClient, ListDataLakeDatasetsCommand, "nextToken", "nextToken", "maxResults");
