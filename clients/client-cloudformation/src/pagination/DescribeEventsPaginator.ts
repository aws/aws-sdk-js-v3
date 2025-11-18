// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "../commands/DescribeEventsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEvents: (
  config: CloudFormationPaginationConfiguration,
  input: DescribeEventsCommandInput,
  ...rest: any[]
) => Paginator<DescribeEventsCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput
>(CloudFormationClient, DescribeEventsCommand, "NextToken", "NextToken", "");
