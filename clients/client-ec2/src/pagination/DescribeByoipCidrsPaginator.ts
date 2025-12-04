// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeByoipCidrsCommand,
  DescribeByoipCidrsCommandInput,
  DescribeByoipCidrsCommandOutput,
} from "../commands/DescribeByoipCidrsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeByoipCidrs: (
  config: EC2PaginationConfiguration,
  input: DescribeByoipCidrsCommandInput,
  ...rest: any[]
) => Paginator<DescribeByoipCidrsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeByoipCidrsCommandInput,
  DescribeByoipCidrsCommandOutput
>(EC2Client, DescribeByoipCidrsCommand, "NextToken", "NextToken", "MaxResults");
