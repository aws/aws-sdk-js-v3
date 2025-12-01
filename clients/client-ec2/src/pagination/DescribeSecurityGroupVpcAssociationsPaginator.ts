// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSecurityGroupVpcAssociationsCommand,
  DescribeSecurityGroupVpcAssociationsCommandInput,
  DescribeSecurityGroupVpcAssociationsCommandOutput,
} from "../commands/DescribeSecurityGroupVpcAssociationsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSecurityGroupVpcAssociations: (
  config: EC2PaginationConfiguration,
  input: DescribeSecurityGroupVpcAssociationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeSecurityGroupVpcAssociationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeSecurityGroupVpcAssociationsCommandInput,
  DescribeSecurityGroupVpcAssociationsCommandOutput
>(EC2Client, DescribeSecurityGroupVpcAssociationsCommand, "NextToken", "NextToken", "MaxResults");
