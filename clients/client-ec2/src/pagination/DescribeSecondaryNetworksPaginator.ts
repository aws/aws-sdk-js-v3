// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSecondaryNetworksCommand,
  DescribeSecondaryNetworksCommandInput,
  DescribeSecondaryNetworksCommandOutput,
} from "../commands/DescribeSecondaryNetworksCommand";
import { EC2Client } from "../EC2Client";
import type { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSecondaryNetworks: (
  config: EC2PaginationConfiguration,
  input: DescribeSecondaryNetworksCommandInput,
  ...rest: any[]
) => Paginator<DescribeSecondaryNetworksCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeSecondaryNetworksCommandInput,
  DescribeSecondaryNetworksCommandOutput
>(EC2Client, DescribeSecondaryNetworksCommand, "NextToken", "NextToken", "MaxResults");
