// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSnapshotCopyGrantsCommand,
  DescribeSnapshotCopyGrantsCommandInput,
  DescribeSnapshotCopyGrantsCommandOutput,
} from "../commands/DescribeSnapshotCopyGrantsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSnapshotCopyGrants: (
  config: RedshiftPaginationConfiguration,
  input: DescribeSnapshotCopyGrantsCommandInput,
  ...rest: any[]
) => Paginator<DescribeSnapshotCopyGrantsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeSnapshotCopyGrantsCommandInput,
  DescribeSnapshotCopyGrantsCommandOutput
>(RedshiftClient, DescribeSnapshotCopyGrantsCommand, "Marker", "Marker", "MaxRecords");
