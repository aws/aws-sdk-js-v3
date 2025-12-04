// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBSecurityGroupsCommand,
  DescribeDBSecurityGroupsCommandInput,
  DescribeDBSecurityGroupsCommandOutput,
} from "../commands/DescribeDBSecurityGroupsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBSecurityGroups: (
  config: RDSPaginationConfiguration,
  input: DescribeDBSecurityGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBSecurityGroupsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBSecurityGroupsCommandInput,
  DescribeDBSecurityGroupsCommandOutput
>(RDSClient, DescribeDBSecurityGroupsCommand, "Marker", "Marker", "MaxRecords");
