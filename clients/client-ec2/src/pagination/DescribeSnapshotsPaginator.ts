// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSnapshotsCommand,
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
} from "../commands/DescribeSnapshotsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSnapshots: (
  config: EC2PaginationConfiguration,
  input: DescribeSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<DescribeSnapshotsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput
>(EC2Client, DescribeSnapshotsCommand, "NextToken", "NextToken", "MaxResults");
