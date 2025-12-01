// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeClustersCommand,
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput,
} from "../commands/DescribeClustersCommand";
import { MemoryDBClient } from "../MemoryDBClient";
import { MemoryDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeClusters: (
  config: MemoryDBPaginationConfiguration,
  input: DescribeClustersCommandInput,
  ...rest: any[]
) => Paginator<DescribeClustersCommandOutput> = createPaginator<
  MemoryDBPaginationConfiguration,
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput
>(MemoryDBClient, DescribeClustersCommand, "NextToken", "NextToken", "MaxResults");
