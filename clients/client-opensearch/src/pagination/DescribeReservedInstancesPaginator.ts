// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReservedInstancesCommand,
  DescribeReservedInstancesCommandInput,
  DescribeReservedInstancesCommandOutput,
} from "../commands/DescribeReservedInstancesCommand";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReservedInstances: (
  config: OpenSearchPaginationConfiguration,
  input: DescribeReservedInstancesCommandInput,
  ...rest: any[]
) => Paginator<DescribeReservedInstancesCommandOutput> = createPaginator<
  OpenSearchPaginationConfiguration,
  DescribeReservedInstancesCommandInput,
  DescribeReservedInstancesCommandOutput
>(OpenSearchClient, DescribeReservedInstancesCommand, "NextToken", "NextToken", "MaxResults");
