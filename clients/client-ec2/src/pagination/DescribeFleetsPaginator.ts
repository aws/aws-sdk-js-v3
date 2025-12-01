// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFleetsCommand,
  DescribeFleetsCommandInput,
  DescribeFleetsCommandOutput,
} from "../commands/DescribeFleetsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFleets: (
  config: EC2PaginationConfiguration,
  input: DescribeFleetsCommandInput,
  ...rest: any[]
) => Paginator<DescribeFleetsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeFleetsCommandInput,
  DescribeFleetsCommandOutput
>(EC2Client, DescribeFleetsCommand, "NextToken", "NextToken", "MaxResults");
