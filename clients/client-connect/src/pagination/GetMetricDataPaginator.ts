// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetMetricDataCommand,
  GetMetricDataCommandInput,
  GetMetricDataCommandOutput,
} from "../commands/GetMetricDataCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetMetricData: (
  config: ConnectPaginationConfiguration,
  input: GetMetricDataCommandInput,
  ...rest: any[]
) => Paginator<GetMetricDataCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  GetMetricDataCommandInput,
  GetMetricDataCommandOutput
>(ConnectClient, GetMetricDataCommand, "NextToken", "NextToken", "MaxResults");
