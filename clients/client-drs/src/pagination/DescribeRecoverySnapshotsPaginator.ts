// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRecoverySnapshotsCommand,
  DescribeRecoverySnapshotsCommandInput,
  DescribeRecoverySnapshotsCommandOutput,
} from "../commands/DescribeRecoverySnapshotsCommand";
import { DrsClient } from "../DrsClient";
import { DrsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRecoverySnapshots: (
  config: DrsPaginationConfiguration,
  input: DescribeRecoverySnapshotsCommandInput,
  ...rest: any[]
) => Paginator<DescribeRecoverySnapshotsCommandOutput> = createPaginator<
  DrsPaginationConfiguration,
  DescribeRecoverySnapshotsCommandInput,
  DescribeRecoverySnapshotsCommandOutput
>(DrsClient, DescribeRecoverySnapshotsCommand, "nextToken", "nextToken", "maxResults");
