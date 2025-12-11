// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeClusterSubnetGroupsCommand,
  DescribeClusterSubnetGroupsCommandInput,
  DescribeClusterSubnetGroupsCommandOutput,
} from "../commands/DescribeClusterSubnetGroupsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeClusterSubnetGroups: (
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterSubnetGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeClusterSubnetGroupsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeClusterSubnetGroupsCommandInput,
  DescribeClusterSubnetGroupsCommandOutput
>(RedshiftClient, DescribeClusterSubnetGroupsCommand, "Marker", "Marker", "MaxRecords");
