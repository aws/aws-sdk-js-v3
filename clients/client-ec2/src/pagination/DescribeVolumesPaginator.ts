// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeVolumesCommand,
  DescribeVolumesCommandInput,
  DescribeVolumesCommandOutput,
} from "../commands/DescribeVolumesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVolumes: (
  config: EC2PaginationConfiguration,
  input: DescribeVolumesCommandInput,
  ...rest: any[]
) => Paginator<DescribeVolumesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeVolumesCommandInput,
  DescribeVolumesCommandOutput
>(EC2Client, DescribeVolumesCommand, "NextToken", "NextToken", "MaxResults");
