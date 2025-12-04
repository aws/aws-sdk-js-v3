// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeProductsCommand,
  DescribeProductsCommandInput,
  DescribeProductsCommandOutput,
} from "../commands/DescribeProductsCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeProducts: (
  config: SecurityHubPaginationConfiguration,
  input: DescribeProductsCommandInput,
  ...rest: any[]
) => Paginator<DescribeProductsCommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  DescribeProductsCommandInput,
  DescribeProductsCommandOutput
>(SecurityHubClient, DescribeProductsCommand, "NextToken", "NextToken", "MaxResults");
