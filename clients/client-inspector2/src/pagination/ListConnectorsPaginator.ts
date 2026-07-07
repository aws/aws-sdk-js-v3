// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConnectorsCommand,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
} from "../commands/ListConnectorsCommand";
import { Inspector2Client } from "../Inspector2Client";
import type { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnectors: (
  config: Inspector2PaginationConfiguration,
  input: ListConnectorsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectorsCommandOutput> = createPaginator<
  Inspector2PaginationConfiguration,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput
>(Inspector2Client, ListConnectorsCommand, "nextToken", "nextToken", "maxResults");
