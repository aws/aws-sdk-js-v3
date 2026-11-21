// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInboundConnectorsCommand,
  ListInboundConnectorsCommandInput,
  ListInboundConnectorsCommandOutput,
} from "../commands/ListInboundConnectorsCommand";
import { QuickSightClient } from "../QuickSightClient";
import type { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInboundConnectors: (
  config: QuickSightPaginationConfiguration,
  input: ListInboundConnectorsCommandInput,
  ...rest: any[]
) => Paginator<ListInboundConnectorsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListInboundConnectorsCommandInput,
  ListInboundConnectorsCommandOutput
>(QuickSightClient, ListInboundConnectorsCommand, "NextToken", "NextToken", "MaxResults");
