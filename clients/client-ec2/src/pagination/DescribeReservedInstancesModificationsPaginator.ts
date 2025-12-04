// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReservedInstancesModificationsCommand,
  DescribeReservedInstancesModificationsCommandInput,
  DescribeReservedInstancesModificationsCommandOutput,
} from "../commands/DescribeReservedInstancesModificationsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReservedInstancesModifications: (
  config: EC2PaginationConfiguration,
  input: DescribeReservedInstancesModificationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeReservedInstancesModificationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeReservedInstancesModificationsCommandInput,
  DescribeReservedInstancesModificationsCommandOutput
>(EC2Client, DescribeReservedInstancesModificationsCommand, "NextToken", "NextToken", "");
