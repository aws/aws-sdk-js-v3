// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBSubnetGroupsCommand,
  DescribeDBSubnetGroupsCommandInput,
  DescribeDBSubnetGroupsCommandOutput,
} from "../commands/DescribeDBSubnetGroupsCommand";
import { DocDBClient } from "../DocDBClient";
import { DocDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBSubnetGroups: (
  config: DocDBPaginationConfiguration,
  input: DescribeDBSubnetGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBSubnetGroupsCommandOutput> = createPaginator<
  DocDBPaginationConfiguration,
  DescribeDBSubnetGroupsCommandInput,
  DescribeDBSubnetGroupsCommandOutput
>(DocDBClient, DescribeDBSubnetGroupsCommand, "Marker", "Marker", "MaxRecords");
