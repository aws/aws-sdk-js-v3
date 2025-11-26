// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBSubnetGroupsCommand,
  DescribeDBSubnetGroupsCommandInput,
  DescribeDBSubnetGroupsCommandOutput,
} from "../commands/DescribeDBSubnetGroupsCommand";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBSubnetGroups: (
  config: NeptunePaginationConfiguration,
  input: DescribeDBSubnetGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBSubnetGroupsCommandOutput> = createPaginator<
  NeptunePaginationConfiguration,
  DescribeDBSubnetGroupsCommandInput,
  DescribeDBSubnetGroupsCommandOutput
>(NeptuneClient, DescribeDBSubnetGroupsCommand, "Marker", "Marker", "MaxRecords");
