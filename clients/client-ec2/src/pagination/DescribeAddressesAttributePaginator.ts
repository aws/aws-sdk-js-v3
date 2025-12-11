// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeAddressesAttributeCommand,
  DescribeAddressesAttributeCommandInput,
  DescribeAddressesAttributeCommandOutput,
} from "../commands/DescribeAddressesAttributeCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAddressesAttribute: (
  config: EC2PaginationConfiguration,
  input: DescribeAddressesAttributeCommandInput,
  ...rest: any[]
) => Paginator<DescribeAddressesAttributeCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeAddressesAttributeCommandInput,
  DescribeAddressesAttributeCommandOutput
>(EC2Client, DescribeAddressesAttributeCommand, "NextToken", "NextToken", "MaxResults");
