// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BatchClient } from "../BatchClient";
import {
  DescribeJobQueuesCommand,
  DescribeJobQueuesCommandInput,
  DescribeJobQueuesCommandOutput,
} from "../commands/DescribeJobQueuesCommand";
import { BatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeJobQueues: (
  config: BatchPaginationConfiguration,
  input: DescribeJobQueuesCommandInput,
  ...rest: any[]
) => Paginator<DescribeJobQueuesCommandOutput> = createPaginator<
  BatchPaginationConfiguration,
  DescribeJobQueuesCommandInput,
  DescribeJobQueuesCommandOutput
>(BatchClient, DescribeJobQueuesCommand, "nextToken", "nextToken", "maxResults");
