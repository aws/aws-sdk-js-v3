// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReservedElasticsearchInstanceOfferingsCommand,
  DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  DescribeReservedElasticsearchInstanceOfferingsCommandOutput,
} from "../commands/DescribeReservedElasticsearchInstanceOfferingsCommand";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReservedElasticsearchInstanceOfferings: (
  config: ElasticsearchServicePaginationConfiguration,
  input: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  ...rest: any[]
) => Paginator<DescribeReservedElasticsearchInstanceOfferingsCommandOutput> = createPaginator<
  ElasticsearchServicePaginationConfiguration,
  DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  DescribeReservedElasticsearchInstanceOfferingsCommandOutput
>(
  ElasticsearchServiceClient,
  DescribeReservedElasticsearchInstanceOfferingsCommand,
  "NextToken",
  "NextToken",
  "MaxResults"
);
