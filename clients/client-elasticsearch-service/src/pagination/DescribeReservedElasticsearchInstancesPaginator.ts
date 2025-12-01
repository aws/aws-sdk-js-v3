// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeReservedElasticsearchInstancesCommand,
  DescribeReservedElasticsearchInstancesCommandInput,
  DescribeReservedElasticsearchInstancesCommandOutput,
} from "../commands/DescribeReservedElasticsearchInstancesCommand";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeReservedElasticsearchInstances: (
  config: ElasticsearchServicePaginationConfiguration,
  input: DescribeReservedElasticsearchInstancesCommandInput,
  ...rest: any[]
) => Paginator<DescribeReservedElasticsearchInstancesCommandOutput> = createPaginator<
  ElasticsearchServicePaginationConfiguration,
  DescribeReservedElasticsearchInstancesCommandInput,
  DescribeReservedElasticsearchInstancesCommandOutput
>(ElasticsearchServiceClient, DescribeReservedElasticsearchInstancesCommand, "NextToken", "NextToken", "MaxResults");
