// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeLocalGatewaysCommand,
  DescribeLocalGatewaysCommandInput,
  DescribeLocalGatewaysCommandOutput,
} from "../commands/DescribeLocalGatewaysCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeLocalGateways: (
  config: EC2PaginationConfiguration,
  input: DescribeLocalGatewaysCommandInput,
  ...rest: any[]
) => Paginator<DescribeLocalGatewaysCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeLocalGatewaysCommandInput,
  DescribeLocalGatewaysCommandOutput
>(EC2Client, DescribeLocalGatewaysCommand, "NextToken", "NextToken", "MaxResults");
