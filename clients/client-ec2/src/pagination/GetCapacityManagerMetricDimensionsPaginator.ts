// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  GetCapacityManagerMetricDimensionsCommand,
  GetCapacityManagerMetricDimensionsCommandInput,
  GetCapacityManagerMetricDimensionsCommandOutput,
} from "../commands/GetCapacityManagerMetricDimensionsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCapacityManagerMetricDimensions: (
  config: EC2PaginationConfiguration,
  input: GetCapacityManagerMetricDimensionsCommandInput,
  ...rest: any[]
) => Paginator<GetCapacityManagerMetricDimensionsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetCapacityManagerMetricDimensionsCommandInput,
  GetCapacityManagerMetricDimensionsCommandOutput
>(EC2Client, GetCapacityManagerMetricDimensionsCommand, "NextToken", "NextToken", "MaxResults");
