// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCapacityBlockExtensionHistoryCommand,
  DescribeCapacityBlockExtensionHistoryCommandInput,
  DescribeCapacityBlockExtensionHistoryCommandOutput,
} from "../commands/DescribeCapacityBlockExtensionHistoryCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCapacityBlockExtensionHistory: (
  config: EC2PaginationConfiguration,
  input: DescribeCapacityBlockExtensionHistoryCommandInput,
  ...rest: any[]
) => Paginator<DescribeCapacityBlockExtensionHistoryCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeCapacityBlockExtensionHistoryCommandInput,
  DescribeCapacityBlockExtensionHistoryCommandOutput
>(EC2Client, DescribeCapacityBlockExtensionHistoryCommand, "NextToken", "NextToken", "MaxResults");
