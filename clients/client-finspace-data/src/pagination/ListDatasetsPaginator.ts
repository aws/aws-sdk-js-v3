// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatasetsCommand,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput,
} from "../commands/ListDatasetsCommand";
import { FinspaceDataClient } from "../FinspaceDataClient";
import { FinspaceDataPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasets: (
  config: FinspaceDataPaginationConfiguration,
  input: ListDatasetsCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetsCommandOutput> = createPaginator<
  FinspaceDataPaginationConfiguration,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput
>(FinspaceDataClient, ListDatasetsCommand, "nextToken", "nextToken", "maxResults");
