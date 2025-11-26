// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReservedCacheNodesOfferingsCommand,
  DescribeReservedCacheNodesOfferingsCommandInput,
  DescribeReservedCacheNodesOfferingsCommandOutput,
} from "../commands/DescribeReservedCacheNodesOfferingsCommand";
import { ElastiCacheClient } from "../ElastiCacheClient";
import { ElastiCachePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReservedCacheNodesOfferings: (
  config: ElastiCachePaginationConfiguration,
  input: DescribeReservedCacheNodesOfferingsCommandInput,
  ...rest: any[]
) => Paginator<DescribeReservedCacheNodesOfferingsCommandOutput> = createPaginator<
  ElastiCachePaginationConfiguration,
  DescribeReservedCacheNodesOfferingsCommandInput,
  DescribeReservedCacheNodesOfferingsCommandOutput
>(ElastiCacheClient, DescribeReservedCacheNodesOfferingsCommand, "Marker", "Marker", "MaxRecords");
