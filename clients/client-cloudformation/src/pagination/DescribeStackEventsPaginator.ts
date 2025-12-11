// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  DescribeStackEventsCommand,
  DescribeStackEventsCommandInput,
  DescribeStackEventsCommandOutput,
} from "../commands/DescribeStackEventsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeStackEvents: (
  config: CloudFormationPaginationConfiguration,
  input: DescribeStackEventsCommandInput,
  ...rest: any[]
) => Paginator<DescribeStackEventsCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  DescribeStackEventsCommandInput,
  DescribeStackEventsCommandOutput
>(CloudFormationClient, DescribeStackEventsCommand, "NextToken", "NextToken", "");
