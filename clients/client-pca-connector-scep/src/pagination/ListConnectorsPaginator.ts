// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConnectorsCommand,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
} from "../commands/ListConnectorsCommand";
import { PcaConnectorScepClient } from "../PcaConnectorScepClient";
import { PcaConnectorScepPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnectors: (
  config: PcaConnectorScepPaginationConfiguration,
  input: ListConnectorsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectorsCommandOutput> = createPaginator<
  PcaConnectorScepPaginationConfiguration,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput
>(PcaConnectorScepClient, ListConnectorsCommand, "NextToken", "NextToken", "MaxResults");
