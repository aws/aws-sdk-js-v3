// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMovingAddressesCommand,
  DescribeMovingAddressesCommandInput,
  DescribeMovingAddressesCommandOutput,
} from "../commands/DescribeMovingAddressesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMovingAddresses: (
  config: EC2PaginationConfiguration,
  input: DescribeMovingAddressesCommandInput,
  ...rest: any[]
) => Paginator<DescribeMovingAddressesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeMovingAddressesCommandInput,
  DescribeMovingAddressesCommandOutput
>(EC2Client, DescribeMovingAddressesCommand, "NextToken", "NextToken", "MaxResults");
