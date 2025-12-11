// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetAwsNetworkPerformanceDataCommand,
  GetAwsNetworkPerformanceDataCommandInput,
  GetAwsNetworkPerformanceDataCommandOutput,
} from "../commands/GetAwsNetworkPerformanceDataCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAwsNetworkPerformanceData: (
  config: EC2PaginationConfiguration,
  input: GetAwsNetworkPerformanceDataCommandInput,
  ...rest: any[]
) => Paginator<GetAwsNetworkPerformanceDataCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetAwsNetworkPerformanceDataCommandInput,
  GetAwsNetworkPerformanceDataCommandOutput
>(EC2Client, GetAwsNetworkPerformanceDataCommand, "NextToken", "NextToken", "MaxResults");
