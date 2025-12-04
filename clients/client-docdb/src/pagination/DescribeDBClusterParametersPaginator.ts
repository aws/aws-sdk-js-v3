// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBClusterParametersCommand,
  DescribeDBClusterParametersCommandInput,
  DescribeDBClusterParametersCommandOutput,
} from "../commands/DescribeDBClusterParametersCommand";
import { DocDBClient } from "../DocDBClient";
import { DocDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBClusterParameters: (
  config: DocDBPaginationConfiguration,
  input: DescribeDBClusterParametersCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBClusterParametersCommandOutput> = createPaginator<
  DocDBPaginationConfiguration,
  DescribeDBClusterParametersCommandInput,
  DescribeDBClusterParametersCommandOutput
>(DocDBClient, DescribeDBClusterParametersCommand, "Marker", "Marker", "MaxRecords");
