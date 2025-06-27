// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeProductsV2Command,
  DescribeProductsV2CommandInput,
  DescribeProductsV2CommandOutput,
} from "../commands/DescribeProductsV2Command";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeProductsV2: (
  config: SecurityHubPaginationConfiguration,
  input: DescribeProductsV2CommandInput,
  ...rest: any[]
) => Paginator<DescribeProductsV2CommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  DescribeProductsV2CommandInput,
  DescribeProductsV2CommandOutput
>(SecurityHubClient, DescribeProductsV2Command, "NextToken", "NextToken", "MaxResults");
