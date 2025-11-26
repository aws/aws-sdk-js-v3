// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeOptionGroupsCommand,
  DescribeOptionGroupsCommandInput,
  DescribeOptionGroupsCommandOutput,
} from "../commands/DescribeOptionGroupsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeOptionGroups: (
  config: RDSPaginationConfiguration,
  input: DescribeOptionGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeOptionGroupsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeOptionGroupsCommandInput,
  DescribeOptionGroupsCommandOutput
>(RDSClient, DescribeOptionGroupsCommand, "Marker", "Marker", "MaxRecords");
