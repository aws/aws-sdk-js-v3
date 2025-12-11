// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBClusterParameterGroupsCommand,
  DescribeDBClusterParameterGroupsCommandInput,
  DescribeDBClusterParameterGroupsCommandOutput,
} from "../commands/DescribeDBClusterParameterGroupsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBClusterParameterGroups: (
  config: RDSPaginationConfiguration,
  input: DescribeDBClusterParameterGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBClusterParameterGroupsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBClusterParameterGroupsCommandInput,
  DescribeDBClusterParameterGroupsCommandOutput
>(RDSClient, DescribeDBClusterParameterGroupsCommand, "Marker", "Marker", "MaxRecords");
