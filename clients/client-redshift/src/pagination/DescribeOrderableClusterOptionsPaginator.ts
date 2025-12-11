// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeOrderableClusterOptionsCommand,
  DescribeOrderableClusterOptionsCommandInput,
  DescribeOrderableClusterOptionsCommandOutput,
} from "../commands/DescribeOrderableClusterOptionsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeOrderableClusterOptions: (
  config: RedshiftPaginationConfiguration,
  input: DescribeOrderableClusterOptionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeOrderableClusterOptionsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeOrderableClusterOptionsCommandInput,
  DescribeOrderableClusterOptionsCommandOutput
>(RedshiftClient, DescribeOrderableClusterOptionsCommand, "Marker", "Marker", "MaxRecords");
