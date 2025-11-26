// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDBRecommendationsCommand,
  DescribeDBRecommendationsCommandInput,
  DescribeDBRecommendationsCommandOutput,
} from "../commands/DescribeDBRecommendationsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDBRecommendations: (
  config: RDSPaginationConfiguration,
  input: DescribeDBRecommendationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDBRecommendationsCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DescribeDBRecommendationsCommandInput,
  DescribeDBRecommendationsCommandOutput
>(RDSClient, DescribeDBRecommendationsCommand, "Marker", "Marker", "MaxRecords");
