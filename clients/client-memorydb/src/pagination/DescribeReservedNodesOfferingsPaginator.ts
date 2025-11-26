// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReservedNodesOfferingsCommand,
  DescribeReservedNodesOfferingsCommandInput,
  DescribeReservedNodesOfferingsCommandOutput,
} from "../commands/DescribeReservedNodesOfferingsCommand";
import { MemoryDBClient } from "../MemoryDBClient";
import { MemoryDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReservedNodesOfferings: (
  config: MemoryDBPaginationConfiguration,
  input: DescribeReservedNodesOfferingsCommandInput,
  ...rest: any[]
) => Paginator<DescribeReservedNodesOfferingsCommandOutput> = createPaginator<
  MemoryDBPaginationConfiguration,
  DescribeReservedNodesOfferingsCommandInput,
  DescribeReservedNodesOfferingsCommandOutput
>(MemoryDBClient, DescribeReservedNodesOfferingsCommand, "NextToken", "NextToken", "MaxResults");
