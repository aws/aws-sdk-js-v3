// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeScheduledInstancesCommand,
  DescribeScheduledInstancesCommandInput,
  DescribeScheduledInstancesCommandOutput,
} from "../commands/DescribeScheduledInstancesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeScheduledInstances: (
  config: EC2PaginationConfiguration,
  input: DescribeScheduledInstancesCommandInput,
  ...rest: any[]
) => Paginator<DescribeScheduledInstancesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeScheduledInstancesCommandInput,
  DescribeScheduledInstancesCommandOutput
>(EC2Client, DescribeScheduledInstancesCommand, "NextToken", "NextToken", "MaxResults");
