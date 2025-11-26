// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeVerifiedAccessInstancesCommand,
  DescribeVerifiedAccessInstancesCommandInput,
  DescribeVerifiedAccessInstancesCommandOutput,
} from "../commands/DescribeVerifiedAccessInstancesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVerifiedAccessInstances: (
  config: EC2PaginationConfiguration,
  input: DescribeVerifiedAccessInstancesCommandInput,
  ...rest: any[]
) => Paginator<DescribeVerifiedAccessInstancesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeVerifiedAccessInstancesCommandInput,
  DescribeVerifiedAccessInstancesCommandOutput
>(EC2Client, DescribeVerifiedAccessInstancesCommand, "NextToken", "NextToken", "MaxResults");
