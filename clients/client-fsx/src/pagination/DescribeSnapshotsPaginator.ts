// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSnapshotsCommand,
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
} from "../commands/DescribeSnapshotsCommand";
import { FSxClient } from "../FSxClient";
import { FSxPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSnapshots: (
  config: FSxPaginationConfiguration,
  input: DescribeSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<DescribeSnapshotsCommandOutput> = createPaginator<
  FSxPaginationConfiguration,
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput
>(FSxClient, DescribeSnapshotsCommand, "NextToken", "NextToken", "MaxResults");
