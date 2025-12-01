// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBClusterParameterGroupsCommand,
  DescribeDBClusterParameterGroupsCommandInput,
  DescribeDBClusterParameterGroupsCommandOutput,
} from "../commands/DescribeDBClusterParameterGroupsCommand";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBClusterParameterGroups: (
  config: NeptunePaginationConfiguration,
  input: DescribeDBClusterParameterGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBClusterParameterGroupsCommandOutput> = createPaginator<
  NeptunePaginationConfiguration,
  DescribeDBClusterParameterGroupsCommandInput,
  DescribeDBClusterParameterGroupsCommandOutput
>(NeptuneClient, DescribeDBClusterParameterGroupsCommand, "Marker", "Marker", "MaxRecords");
