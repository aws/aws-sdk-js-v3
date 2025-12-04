// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeNetworkInterfacesCommand,
  DescribeNetworkInterfacesCommandInput,
  DescribeNetworkInterfacesCommandOutput,
} from "../commands/DescribeNetworkInterfacesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeNetworkInterfaces: (
  config: EC2PaginationConfiguration,
  input: DescribeNetworkInterfacesCommandInput,
  ...rest: any[]
) => Paginator<DescribeNetworkInterfacesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeNetworkInterfacesCommandInput,
  DescribeNetworkInterfacesCommandOutput
>(EC2Client, DescribeNetworkInterfacesCommand, "NextToken", "NextToken", "MaxResults");
