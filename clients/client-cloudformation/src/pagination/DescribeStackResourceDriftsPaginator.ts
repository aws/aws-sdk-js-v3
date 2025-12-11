// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  DescribeStackResourceDriftsCommand,
  DescribeStackResourceDriftsCommandInput,
  DescribeStackResourceDriftsCommandOutput,
} from "../commands/DescribeStackResourceDriftsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeStackResourceDrifts: (
  config: CloudFormationPaginationConfiguration,
  input: DescribeStackResourceDriftsCommandInput,
  ...rest: any[]
) => Paginator<DescribeStackResourceDriftsCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  DescribeStackResourceDriftsCommandInput,
  DescribeStackResourceDriftsCommandOutput
>(CloudFormationClient, DescribeStackResourceDriftsCommand, "NextToken", "NextToken", "MaxResults");
