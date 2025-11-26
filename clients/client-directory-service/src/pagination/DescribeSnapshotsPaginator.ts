// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSnapshotsCommand,
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
} from "../commands/DescribeSnapshotsCommand";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSnapshots: (
  config: DirectoryServicePaginationConfiguration,
  input: DescribeSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<DescribeSnapshotsCommandOutput> = createPaginator<
  DirectoryServicePaginationConfiguration,
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput
>(DirectoryServiceClient, DescribeSnapshotsCommand, "NextToken", "NextToken", "Limit");
