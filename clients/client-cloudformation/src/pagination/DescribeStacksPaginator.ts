// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  DescribeStacksCommand,
  DescribeStacksCommandInput,
  DescribeStacksCommandOutput,
} from "../commands/DescribeStacksCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeStacks: (
  config: CloudFormationPaginationConfiguration,
  input: DescribeStacksCommandInput,
  ...rest: any[]
) => Paginator<DescribeStacksCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  DescribeStacksCommandInput,
  DescribeStacksCommandOutput
>(CloudFormationClient, DescribeStacksCommand, "NextToken", "NextToken", "");
