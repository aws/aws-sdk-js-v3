// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReservedNodesCommand,
  DescribeReservedNodesCommandInput,
  DescribeReservedNodesCommandOutput,
} from "../commands/DescribeReservedNodesCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReservedNodes: (
  config: RedshiftPaginationConfiguration,
  input: DescribeReservedNodesCommandInput,
  ...rest: any[]
) => Paginator<DescribeReservedNodesCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeReservedNodesCommandInput,
  DescribeReservedNodesCommandOutput
>(RedshiftClient, DescribeReservedNodesCommand, "Marker", "Marker", "MaxRecords");
