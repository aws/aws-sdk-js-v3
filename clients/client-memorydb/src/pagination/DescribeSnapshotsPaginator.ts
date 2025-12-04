// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSnapshotsCommand,
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
} from "../commands/DescribeSnapshotsCommand";
import { MemoryDBClient } from "../MemoryDBClient";
import { MemoryDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSnapshots: (
  config: MemoryDBPaginationConfiguration,
  input: DescribeSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<DescribeSnapshotsCommandOutput> = createPaginator<
  MemoryDBPaginationConfiguration,
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput
>(MemoryDBClient, DescribeSnapshotsCommand, "NextToken", "NextToken", "MaxResults");
