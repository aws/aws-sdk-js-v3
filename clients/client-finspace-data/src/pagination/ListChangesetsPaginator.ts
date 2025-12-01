// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListChangesetsCommand,
  ListChangesetsCommandInput,
  ListChangesetsCommandOutput,
} from "../commands/ListChangesetsCommand";
import { FinspaceDataClient } from "../FinspaceDataClient";
import { FinspaceDataPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChangesets: (
  config: FinspaceDataPaginationConfiguration,
  input: ListChangesetsCommandInput,
  ...rest: any[]
) => Paginator<ListChangesetsCommandOutput> = createPaginator<
  FinspaceDataPaginationConfiguration,
  ListChangesetsCommandInput,
  ListChangesetsCommandOutput
>(FinspaceDataClient, ListChangesetsCommand, "nextToken", "nextToken", "maxResults");
