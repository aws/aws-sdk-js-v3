// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeAssociationExecutionTargetsCommand,
  DescribeAssociationExecutionTargetsCommandInput,
  DescribeAssociationExecutionTargetsCommandOutput,
} from "../commands/DescribeAssociationExecutionTargetsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAssociationExecutionTargets: (
  config: SSMPaginationConfiguration,
  input: DescribeAssociationExecutionTargetsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAssociationExecutionTargetsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeAssociationExecutionTargetsCommandInput,
  DescribeAssociationExecutionTargetsCommandOutput
>(SSMClient, DescribeAssociationExecutionTargetsCommand, "NextToken", "NextToken", "MaxResults");
