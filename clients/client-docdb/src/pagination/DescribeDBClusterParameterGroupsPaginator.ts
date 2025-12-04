// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBClusterParameterGroupsCommand,
  DescribeDBClusterParameterGroupsCommandInput,
  DescribeDBClusterParameterGroupsCommandOutput,
} from "../commands/DescribeDBClusterParameterGroupsCommand";
import { DocDBClient } from "../DocDBClient";
import { DocDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBClusterParameterGroups: (
  config: DocDBPaginationConfiguration,
  input: DescribeDBClusterParameterGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBClusterParameterGroupsCommandOutput> = createPaginator<
  DocDBPaginationConfiguration,
  DescribeDBClusterParameterGroupsCommandInput,
  DescribeDBClusterParameterGroupsCommandOutput
>(DocDBClient, DescribeDBClusterParameterGroupsCommand, "Marker", "Marker", "MaxRecords");
