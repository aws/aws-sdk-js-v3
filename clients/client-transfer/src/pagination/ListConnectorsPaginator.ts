// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConnectorsCommand,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
} from "../commands/ListConnectorsCommand";
import { TransferClient } from "../TransferClient";
import { TransferPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnectors: (
  config: TransferPaginationConfiguration,
  input: ListConnectorsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectorsCommandOutput> = createPaginator<
  TransferPaginationConfiguration,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput
>(TransferClient, ListConnectorsCommand, "NextToken", "NextToken", "MaxResults");
