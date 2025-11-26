// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBSnapshotsCommand,
  DescribeDBSnapshotsCommandInput,
  DescribeDBSnapshotsCommandOutput,
} from "../commands/DescribeDBSnapshotsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBSnapshots: (
  config: RDSPaginationConfiguration,
  input: DescribeDBSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBSnapshotsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBSnapshotsCommandInput,
  DescribeDBSnapshotsCommandOutput
>(RDSClient, DescribeDBSnapshotsCommand, "Marker", "Marker", "MaxRecords");
