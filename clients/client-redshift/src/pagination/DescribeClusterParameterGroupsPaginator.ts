// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeClusterParameterGroupsCommand,
  DescribeClusterParameterGroupsCommandInput,
  DescribeClusterParameterGroupsCommandOutput,
} from "../commands/DescribeClusterParameterGroupsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeClusterParameterGroups: (
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterParameterGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeClusterParameterGroupsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeClusterParameterGroupsCommandInput,
  DescribeClusterParameterGroupsCommandOutput
>(RedshiftClient, DescribeClusterParameterGroupsCommand, "Marker", "Marker", "MaxRecords");
