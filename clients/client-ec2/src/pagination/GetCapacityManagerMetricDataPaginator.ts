// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  GetCapacityManagerMetricDataCommand,
  GetCapacityManagerMetricDataCommandInput,
  GetCapacityManagerMetricDataCommandOutput,
} from "../commands/GetCapacityManagerMetricDataCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCapacityManagerMetricData: (
  config: EC2PaginationConfiguration,
  input: GetCapacityManagerMetricDataCommandInput,
  ...rest: any[]
) => Paginator<GetCapacityManagerMetricDataCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetCapacityManagerMetricDataCommandInput,
  GetCapacityManagerMetricDataCommandOutput
>(EC2Client, GetCapacityManagerMetricDataCommand, "NextToken", "NextToken", "MaxResults");
