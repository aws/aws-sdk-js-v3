// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTrafficMirrorTargetsCommand,
  DescribeTrafficMirrorTargetsCommandInput,
  DescribeTrafficMirrorTargetsCommandOutput,
} from "../commands/DescribeTrafficMirrorTargetsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTrafficMirrorTargets: (
  config: EC2PaginationConfiguration,
  input: DescribeTrafficMirrorTargetsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTrafficMirrorTargetsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeTrafficMirrorTargetsCommandInput,
  DescribeTrafficMirrorTargetsCommandOutput
>(EC2Client, DescribeTrafficMirrorTargetsCommand, "NextToken", "NextToken", "MaxResults");
