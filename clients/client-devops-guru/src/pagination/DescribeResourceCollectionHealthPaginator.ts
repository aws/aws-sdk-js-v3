// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeResourceCollectionHealthCommand,
  DescribeResourceCollectionHealthCommandInput,
  DescribeResourceCollectionHealthCommandOutput,
} from "../commands/DescribeResourceCollectionHealthCommand";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeResourceCollectionHealth: (
  config: DevOpsGuruPaginationConfiguration,
  input: DescribeResourceCollectionHealthCommandInput,
  ...rest: any[]
) => Paginator<DescribeResourceCollectionHealthCommandOutput> = createPaginator<
  DevOpsGuruPaginationConfiguration,
  DescribeResourceCollectionHealthCommandInput,
  DescribeResourceCollectionHealthCommandOutput
>(DevOpsGuruClient, DescribeResourceCollectionHealthCommand, "NextToken", "NextToken", "");
