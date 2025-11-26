// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConnectorsCommand,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
} from "../commands/ListConnectorsCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnectors: (
  config: MgnPaginationConfiguration,
  input: ListConnectorsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectorsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput
>(MgnClient, ListConnectorsCommand, "nextToken", "nextToken", "maxResults");
