// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeVpcEndpointServiceConfigurationsCommand,
  DescribeVpcEndpointServiceConfigurationsCommandInput,
  DescribeVpcEndpointServiceConfigurationsCommandOutput,
} from "../commands/DescribeVpcEndpointServiceConfigurationsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVpcEndpointServiceConfigurations: (
  config: EC2PaginationConfiguration,
  input: DescribeVpcEndpointServiceConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeVpcEndpointServiceConfigurationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeVpcEndpointServiceConfigurationsCommandInput,
  DescribeVpcEndpointServiceConfigurationsCommandOutput
>(EC2Client, DescribeVpcEndpointServiceConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
