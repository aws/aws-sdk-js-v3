// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeVerifiedAccessGroupsCommand,
  DescribeVerifiedAccessGroupsCommandInput,
  DescribeVerifiedAccessGroupsCommandOutput,
} from "../commands/DescribeVerifiedAccessGroupsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVerifiedAccessGroups: (
  config: EC2PaginationConfiguration,
  input: DescribeVerifiedAccessGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeVerifiedAccessGroupsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeVerifiedAccessGroupsCommandInput,
  DescribeVerifiedAccessGroupsCommandOutput
>(EC2Client, DescribeVerifiedAccessGroupsCommand, "NextToken", "NextToken", "MaxResults");
