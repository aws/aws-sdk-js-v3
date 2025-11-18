// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  DescribeChangeSetCommand,
  DescribeChangeSetCommandInput,
  DescribeChangeSetCommandOutput,
} from "../commands/DescribeChangeSetCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeChangeSet: (
  config: CloudFormationPaginationConfiguration,
  input: DescribeChangeSetCommandInput,
  ...rest: any[]
) => Paginator<DescribeChangeSetCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  DescribeChangeSetCommandInput,
  DescribeChangeSetCommandOutput
>(CloudFormationClient, DescribeChangeSetCommand, "NextToken", "NextToken", "");
