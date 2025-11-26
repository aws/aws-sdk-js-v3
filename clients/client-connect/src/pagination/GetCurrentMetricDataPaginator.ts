// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetCurrentMetricDataCommand,
  GetCurrentMetricDataCommandInput,
  GetCurrentMetricDataCommandOutput,
} from "../commands/GetCurrentMetricDataCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCurrentMetricData: (
  config: ConnectPaginationConfiguration,
  input: GetCurrentMetricDataCommandInput,
  ...rest: any[]
) => Paginator<GetCurrentMetricDataCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  GetCurrentMetricDataCommandInput,
  GetCurrentMetricDataCommandOutput
>(ConnectClient, GetCurrentMetricDataCommand, "NextToken", "NextToken", "MaxResults");
