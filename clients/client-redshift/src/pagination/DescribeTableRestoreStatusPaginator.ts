// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTableRestoreStatusCommand,
  DescribeTableRestoreStatusCommandInput,
  DescribeTableRestoreStatusCommandOutput,
} from "../commands/DescribeTableRestoreStatusCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTableRestoreStatus: (
  config: RedshiftPaginationConfiguration,
  input: DescribeTableRestoreStatusCommandInput,
  ...rest: any[]
) => Paginator<DescribeTableRestoreStatusCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeTableRestoreStatusCommandInput,
  DescribeTableRestoreStatusCommandOutput
>(RedshiftClient, DescribeTableRestoreStatusCommand, "Marker", "Marker", "MaxRecords");
