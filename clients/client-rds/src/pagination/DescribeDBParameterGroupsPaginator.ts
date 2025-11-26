// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBParameterGroupsCommand,
  DescribeDBParameterGroupsCommandInput,
  DescribeDBParameterGroupsCommandOutput,
} from "../commands/DescribeDBParameterGroupsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBParameterGroups: (
  config: RDSPaginationConfiguration,
  input: DescribeDBParameterGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBParameterGroupsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBParameterGroupsCommandInput,
  DescribeDBParameterGroupsCommandOutput
>(RDSClient, DescribeDBParameterGroupsCommand, "Marker", "Marker", "MaxRecords");
