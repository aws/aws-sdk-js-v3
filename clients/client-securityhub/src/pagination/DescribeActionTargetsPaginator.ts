// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeActionTargetsCommand,
  DescribeActionTargetsCommandInput,
  DescribeActionTargetsCommandOutput,
} from "../commands/DescribeActionTargetsCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeActionTargets: (
  config: SecurityHubPaginationConfiguration,
  input: DescribeActionTargetsCommandInput,
  ...rest: any[]
) => Paginator<DescribeActionTargetsCommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  DescribeActionTargetsCommandInput,
  DescribeActionTargetsCommandOutput
>(SecurityHubClient, DescribeActionTargetsCommand, "NextToken", "NextToken", "MaxResults");
