// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeAggregationAuthorizationsCommand,
  DescribeAggregationAuthorizationsCommandInput,
  DescribeAggregationAuthorizationsCommandOutput,
} from "../commands/DescribeAggregationAuthorizationsCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAggregationAuthorizations: (
  config: ConfigServicePaginationConfiguration,
  input: DescribeAggregationAuthorizationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAggregationAuthorizationsCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  DescribeAggregationAuthorizationsCommandInput,
  DescribeAggregationAuthorizationsCommandOutput
>(ConfigServiceClient, DescribeAggregationAuthorizationsCommand, "NextToken", "NextToken", "Limit");
