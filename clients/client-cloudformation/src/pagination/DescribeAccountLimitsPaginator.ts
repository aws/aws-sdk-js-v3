// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  DescribeAccountLimitsCommand,
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "../commands/DescribeAccountLimitsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAccountLimits: (
  config: CloudFormationPaginationConfiguration,
  input: DescribeAccountLimitsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAccountLimitsCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput
>(CloudFormationClient, DescribeAccountLimitsCommand, "NextToken", "NextToken", "");
