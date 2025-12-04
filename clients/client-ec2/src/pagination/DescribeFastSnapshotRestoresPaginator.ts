// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFastSnapshotRestoresCommand,
  DescribeFastSnapshotRestoresCommandInput,
  DescribeFastSnapshotRestoresCommandOutput,
} from "../commands/DescribeFastSnapshotRestoresCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFastSnapshotRestores: (
  config: EC2PaginationConfiguration,
  input: DescribeFastSnapshotRestoresCommandInput,
  ...rest: any[]
) => Paginator<DescribeFastSnapshotRestoresCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeFastSnapshotRestoresCommandInput,
  DescribeFastSnapshotRestoresCommandOutput
>(EC2Client, DescribeFastSnapshotRestoresCommand, "NextToken", "NextToken", "MaxResults");
