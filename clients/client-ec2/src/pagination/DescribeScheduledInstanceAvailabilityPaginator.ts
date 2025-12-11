// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeScheduledInstanceAvailabilityCommand,
  DescribeScheduledInstanceAvailabilityCommandInput,
  DescribeScheduledInstanceAvailabilityCommandOutput,
} from "../commands/DescribeScheduledInstanceAvailabilityCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeScheduledInstanceAvailability: (
  config: EC2PaginationConfiguration,
  input: DescribeScheduledInstanceAvailabilityCommandInput,
  ...rest: any[]
) => Paginator<DescribeScheduledInstanceAvailabilityCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeScheduledInstanceAvailabilityCommandInput,
  DescribeScheduledInstanceAvailabilityCommandOutput
>(EC2Client, DescribeScheduledInstanceAvailabilityCommand, "NextToken", "NextToken", "MaxResults");
