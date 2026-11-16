// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatasetsCommand,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput,
} from "../commands/ListDatasetsCommand";
import { ConnectHealthClient } from "../ConnectHealthClient";
import type { ConnectHealthPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasets: (
  config: ConnectHealthPaginationConfiguration,
  input: ListDatasetsCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetsCommandOutput> = createPaginator<
  ConnectHealthPaginationConfiguration,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput
>(ConnectHealthClient, ListDatasetsCommand, "nextToken", "nextToken", "maxResults");
