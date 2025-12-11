// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetResourceMetricsCommand,
  GetResourceMetricsCommandInput,
  GetResourceMetricsCommandOutput,
} from "../commands/GetResourceMetricsCommand";
import { PIClient } from "../PIClient";
import { PIPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetResourceMetrics: (
  config: PIPaginationConfiguration,
  input: GetResourceMetricsCommandInput,
  ...rest: any[]
) => Paginator<GetResourceMetricsCommandOutput> = createPaginator<
  PIPaginationConfiguration,
  GetResourceMetricsCommandInput,
  GetResourceMetricsCommandOutput
>(PIClient, GetResourceMetricsCommand, "NextToken", "NextToken", "MaxResults");
