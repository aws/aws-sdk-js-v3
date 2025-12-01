// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppflowClient } from "../AppflowClient";
import {
  ListConnectorsCommand,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
} from "../commands/ListConnectorsCommand";
import { AppflowPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnectors: (
  config: AppflowPaginationConfiguration,
  input: ListConnectorsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectorsCommandOutput> = createPaginator<
  AppflowPaginationConfiguration,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput
>(AppflowClient, ListConnectorsCommand, "nextToken", "nextToken", "maxResults");
