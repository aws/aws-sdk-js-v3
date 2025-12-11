// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCarrierGatewaysCommand,
  DescribeCarrierGatewaysCommandInput,
  DescribeCarrierGatewaysCommandOutput,
} from "../commands/DescribeCarrierGatewaysCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCarrierGateways: (
  config: EC2PaginationConfiguration,
  input: DescribeCarrierGatewaysCommandInput,
  ...rest: any[]
) => Paginator<DescribeCarrierGatewaysCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeCarrierGatewaysCommandInput,
  DescribeCarrierGatewaysCommandOutput
>(EC2Client, DescribeCarrierGatewaysCommand, "NextToken", "NextToken", "MaxResults");
