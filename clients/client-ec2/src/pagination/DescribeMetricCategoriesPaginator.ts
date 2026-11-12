// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMetricCategoriesCommand,
  DescribeMetricCategoriesCommandInput,
  DescribeMetricCategoriesCommandOutput,
} from "../commands/DescribeMetricCategoriesCommand";
import { EC2Client } from "../EC2Client";
import type { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMetricCategories: (
  config: EC2PaginationConfiguration,
  input: DescribeMetricCategoriesCommandInput,
  ...rest: any[]
) => Paginator<DescribeMetricCategoriesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeMetricCategoriesCommandInput,
  DescribeMetricCategoriesCommandOutput
>(EC2Client, DescribeMetricCategoriesCommand, "NextToken", "NextToken", "MaxResults");
