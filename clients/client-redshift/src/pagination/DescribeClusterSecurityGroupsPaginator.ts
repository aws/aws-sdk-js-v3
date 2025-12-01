// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeClusterSecurityGroupsCommand,
  DescribeClusterSecurityGroupsCommandInput,
  DescribeClusterSecurityGroupsCommandOutput,
} from "../commands/DescribeClusterSecurityGroupsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeClusterSecurityGroups: (
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterSecurityGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeClusterSecurityGroupsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeClusterSecurityGroupsCommandInput,
  DescribeClusterSecurityGroupsCommandOutput
>(RedshiftClient, DescribeClusterSecurityGroupsCommand, "Marker", "Marker", "MaxRecords");
