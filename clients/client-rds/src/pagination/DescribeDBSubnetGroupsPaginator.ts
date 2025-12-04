// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBSubnetGroupsCommand,
  DescribeDBSubnetGroupsCommandInput,
  DescribeDBSubnetGroupsCommandOutput,
} from "../commands/DescribeDBSubnetGroupsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBSubnetGroups: (
  config: RDSPaginationConfiguration,
  input: DescribeDBSubnetGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBSubnetGroupsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBSubnetGroupsCommandInput,
  DescribeDBSubnetGroupsCommandOutput
>(RDSClient, DescribeDBSubnetGroupsCommand, "Marker", "Marker", "MaxRecords");
