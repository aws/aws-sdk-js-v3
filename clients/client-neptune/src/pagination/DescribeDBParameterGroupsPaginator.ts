// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBParameterGroupsCommand,
  DescribeDBParameterGroupsCommandInput,
  DescribeDBParameterGroupsCommandOutput,
} from "../commands/DescribeDBParameterGroupsCommand";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBParameterGroups: (
  config: NeptunePaginationConfiguration,
  input: DescribeDBParameterGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBParameterGroupsCommandOutput> = createPaginator<
  NeptunePaginationConfiguration,
  DescribeDBParameterGroupsCommandInput,
  DescribeDBParameterGroupsCommandOutput
>(NeptuneClient, DescribeDBParameterGroupsCommand, "Marker", "Marker", "MaxRecords");
