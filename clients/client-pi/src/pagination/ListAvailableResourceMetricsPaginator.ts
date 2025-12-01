// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAvailableResourceMetricsCommand,
  ListAvailableResourceMetricsCommandInput,
  ListAvailableResourceMetricsCommandOutput,
} from "../commands/ListAvailableResourceMetricsCommand";
import { PIClient } from "../PIClient";
import { PIPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAvailableResourceMetrics: (
  config: PIPaginationConfiguration,
  input: ListAvailableResourceMetricsCommandInput,
  ...rest: any[]
) => Paginator<ListAvailableResourceMetricsCommandOutput> = createPaginator<
  PIPaginationConfiguration,
  ListAvailableResourceMetricsCommandInput,
  ListAvailableResourceMetricsCommandOutput
>(PIClient, ListAvailableResourceMetricsCommand, "NextToken", "NextToken", "MaxResults");
