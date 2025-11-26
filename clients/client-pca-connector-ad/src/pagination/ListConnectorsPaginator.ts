// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConnectorsCommand,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
} from "../commands/ListConnectorsCommand";
import { PcaConnectorAdClient } from "../PcaConnectorAdClient";
import { PcaConnectorAdPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnectors: (
  config: PcaConnectorAdPaginationConfiguration,
  input: ListConnectorsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectorsCommandOutput> = createPaginator<
  PcaConnectorAdPaginationConfiguration,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput
>(PcaConnectorAdClient, ListConnectorsCommand, "NextToken", "NextToken", "MaxResults");
