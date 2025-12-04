// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchActionConnectorsCommand,
  SearchActionConnectorsCommandInput,
  SearchActionConnectorsCommandOutput,
} from "../commands/SearchActionConnectorsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchActionConnectors: (
  config: QuickSightPaginationConfiguration,
  input: SearchActionConnectorsCommandInput,
  ...rest: any[]
) => Paginator<SearchActionConnectorsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  SearchActionConnectorsCommandInput,
  SearchActionConnectorsCommandOutput
>(QuickSightClient, SearchActionConnectorsCommand, "NextToken", "NextToken", "MaxResults");
