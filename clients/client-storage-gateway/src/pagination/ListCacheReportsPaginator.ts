// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCacheReportsCommand,
  ListCacheReportsCommandInput,
  ListCacheReportsCommandOutput,
} from "../commands/ListCacheReportsCommand";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCacheReports: (
  config: StorageGatewayPaginationConfiguration,
  input: ListCacheReportsCommandInput,
  ...rest: any[]
) => Paginator<ListCacheReportsCommandOutput> = createPaginator<
  StorageGatewayPaginationConfiguration,
  ListCacheReportsCommandInput,
  ListCacheReportsCommandOutput
>(StorageGatewayClient, ListCacheReportsCommand, "Marker", "Marker", "");
