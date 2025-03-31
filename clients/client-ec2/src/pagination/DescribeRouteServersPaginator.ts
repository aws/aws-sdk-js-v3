// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeRouteServersCommand,
  DescribeRouteServersCommandInput,
  DescribeRouteServersCommandOutput,
} from "../commands/DescribeRouteServersCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRouteServers: (
  config: EC2PaginationConfiguration,
  input: DescribeRouteServersCommandInput,
  ...rest: any[]
) => Paginator<DescribeRouteServersCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeRouteServersCommandInput,
  DescribeRouteServersCommandOutput
>(EC2Client, DescribeRouteServersCommand, "NextToken", "NextToken", "MaxResults");
