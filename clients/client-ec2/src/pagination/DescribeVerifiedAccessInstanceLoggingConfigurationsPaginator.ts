// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommand,
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput,
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput,
} from "../commands/DescribeVerifiedAccessInstanceLoggingConfigurationsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVerifiedAccessInstanceLoggingConfigurations: (
  config: EC2PaginationConfiguration,
  input: DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommandInput,
  DescribeVerifiedAccessInstanceLoggingConfigurationsCommandOutput
>(EC2Client, DescribeVerifiedAccessInstanceLoggingConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
