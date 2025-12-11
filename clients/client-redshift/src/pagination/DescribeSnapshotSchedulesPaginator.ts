// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSnapshotSchedulesCommand,
  DescribeSnapshotSchedulesCommandInput,
  DescribeSnapshotSchedulesCommandOutput,
} from "../commands/DescribeSnapshotSchedulesCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSnapshotSchedules: (
  config: RedshiftPaginationConfiguration,
  input: DescribeSnapshotSchedulesCommandInput,
  ...rest: any[]
) => Paginator<DescribeSnapshotSchedulesCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeSnapshotSchedulesCommandInput,
  DescribeSnapshotSchedulesCommandOutput
>(RedshiftClient, DescribeSnapshotSchedulesCommand, "Marker", "Marker", "MaxRecords");
