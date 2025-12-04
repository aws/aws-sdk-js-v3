// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeClassicLinkInstancesCommand,
  DescribeClassicLinkInstancesCommandInput,
  DescribeClassicLinkInstancesCommandOutput,
} from "../commands/DescribeClassicLinkInstancesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeClassicLinkInstances: (
  config: EC2PaginationConfiguration,
  input: DescribeClassicLinkInstancesCommandInput,
  ...rest: any[]
) => Paginator<DescribeClassicLinkInstancesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeClassicLinkInstancesCommandInput,
  DescribeClassicLinkInstancesCommandOutput
>(EC2Client, DescribeClassicLinkInstancesCommand, "NextToken", "NextToken", "MaxResults");
