// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListVPCConnectionsCommand,
  ListVPCConnectionsCommandInput,
  ListVPCConnectionsCommandOutput,
} from "../commands/ListVPCConnectionsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVPCConnections: (
  config: QuickSightPaginationConfiguration,
  input: ListVPCConnectionsCommandInput,
  ...rest: any[]
) => Paginator<ListVPCConnectionsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListVPCConnectionsCommandInput,
  ListVPCConnectionsCommandOutput
>(QuickSightClient, ListVPCConnectionsCommand, "NextToken", "NextToken", "MaxResults");
