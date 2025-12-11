// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeHostsCommand,
  DescribeHostsCommandInput,
  DescribeHostsCommandOutput,
} from "../commands/DescribeHostsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeHosts: (
  config: EC2PaginationConfiguration,
  input: DescribeHostsCommandInput,
  ...rest: any[]
) => Paginator<DescribeHostsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeHostsCommandInput,
  DescribeHostsCommandOutput
>(EC2Client, DescribeHostsCommand, "NextToken", "NextToken", "MaxResults");
