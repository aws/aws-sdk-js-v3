// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConnectorsCommand,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
} from "../commands/ListConnectorsCommand";
import { ObservabilityAdminClient } from "../ObservabilityAdminClient";
import type { ObservabilityAdminPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnectors: (
  config: ObservabilityAdminPaginationConfiguration,
  input: ListConnectorsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectorsCommandOutput> = createPaginator<
  ObservabilityAdminPaginationConfiguration,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput
>(ObservabilityAdminClient, ListConnectorsCommand, "NextToken", "NextToken", "MaxResults");
