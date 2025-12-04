// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeNetworkAclsCommand,
  DescribeNetworkAclsCommandInput,
  DescribeNetworkAclsCommandOutput,
} from "../commands/DescribeNetworkAclsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeNetworkAcls: (
  config: EC2PaginationConfiguration,
  input: DescribeNetworkAclsCommandInput,
  ...rest: any[]
) => Paginator<DescribeNetworkAclsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeNetworkAclsCommandInput,
  DescribeNetworkAclsCommandOutput
>(EC2Client, DescribeNetworkAclsCommand, "NextToken", "NextToken", "MaxResults");
