// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeAddressTransfersCommand,
  DescribeAddressTransfersCommandInput,
  DescribeAddressTransfersCommandOutput,
} from "../commands/DescribeAddressTransfersCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAddressTransfers: (
  config: EC2PaginationConfiguration,
  input: DescribeAddressTransfersCommandInput,
  ...rest: any[]
) => Paginator<DescribeAddressTransfersCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeAddressTransfersCommandInput,
  DescribeAddressTransfersCommandOutput
>(EC2Client, DescribeAddressTransfersCommand, "NextToken", "NextToken", "MaxResults");
