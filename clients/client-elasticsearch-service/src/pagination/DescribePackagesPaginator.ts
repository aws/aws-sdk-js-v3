// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribePackagesCommand,
  DescribePackagesCommandInput,
  DescribePackagesCommandOutput,
} from "../commands/DescribePackagesCommand";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePackages: (
  config: ElasticsearchServicePaginationConfiguration,
  input: DescribePackagesCommandInput,
  ...rest: any[]
) => Paginator<DescribePackagesCommandOutput> = createPaginator<
  ElasticsearchServicePaginationConfiguration,
  DescribePackagesCommandInput,
  DescribePackagesCommandOutput
>(ElasticsearchServiceClient, DescribePackagesCommand, "NextToken", "NextToken", "MaxResults");
