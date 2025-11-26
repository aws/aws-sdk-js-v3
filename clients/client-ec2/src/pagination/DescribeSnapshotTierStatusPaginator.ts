// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSnapshotTierStatusCommand,
  DescribeSnapshotTierStatusCommandInput,
  DescribeSnapshotTierStatusCommandOutput,
} from "../commands/DescribeSnapshotTierStatusCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSnapshotTierStatus: (
  config: EC2PaginationConfiguration,
  input: DescribeSnapshotTierStatusCommandInput,
  ...rest: any[]
) => Paginator<DescribeSnapshotTierStatusCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeSnapshotTierStatusCommandInput,
  DescribeSnapshotTierStatusCommandOutput
>(EC2Client, DescribeSnapshotTierStatusCommand, "NextToken", "NextToken", "MaxResults");
