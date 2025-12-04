// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeInstanceAssociationsStatusCommand,
  DescribeInstanceAssociationsStatusCommandInput,
  DescribeInstanceAssociationsStatusCommandOutput,
} from "../commands/DescribeInstanceAssociationsStatusCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInstanceAssociationsStatus: (
  config: SSMPaginationConfiguration,
  input: DescribeInstanceAssociationsStatusCommandInput,
  ...rest: any[]
) => Paginator<DescribeInstanceAssociationsStatusCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribeInstanceAssociationsStatusCommandInput,
  DescribeInstanceAssociationsStatusCommandOutput
>(SSMClient, DescribeInstanceAssociationsStatusCommand, "NextToken", "NextToken", "MaxResults");
