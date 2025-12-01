// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeVolumeStatusCommand,
  DescribeVolumeStatusCommandInput,
  DescribeVolumeStatusCommandOutput,
} from "../commands/DescribeVolumeStatusCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVolumeStatus: (
  config: EC2PaginationConfiguration,
  input: DescribeVolumeStatusCommandInput,
  ...rest: any[]
) => Paginator<DescribeVolumeStatusCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeVolumeStatusCommandInput,
  DescribeVolumeStatusCommandOutput
>(EC2Client, DescribeVolumeStatusCommand, "NextToken", "NextToken", "MaxResults");
