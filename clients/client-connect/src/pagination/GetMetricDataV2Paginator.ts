// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetMetricDataV2Command,
  GetMetricDataV2CommandInput,
  GetMetricDataV2CommandOutput,
} from "../commands/GetMetricDataV2Command";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetMetricDataV2: (
  config: ConnectPaginationConfiguration,
  input: GetMetricDataV2CommandInput,
  ...rest: any[]
) => Paginator<GetMetricDataV2CommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  GetMetricDataV2CommandInput,
  GetMetricDataV2CommandOutput
>(ConnectClient, GetMetricDataV2Command, "NextToken", "NextToken", "MaxResults");
