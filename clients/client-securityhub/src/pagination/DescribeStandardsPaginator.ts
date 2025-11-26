// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeStandardsCommand,
  DescribeStandardsCommandInput,
  DescribeStandardsCommandOutput,
} from "../commands/DescribeStandardsCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeStandards: (
  config: SecurityHubPaginationConfiguration,
  input: DescribeStandardsCommandInput,
  ...rest: any[]
) => Paginator<DescribeStandardsCommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  DescribeStandardsCommandInput,
  DescribeStandardsCommandOutput
>(SecurityHubClient, DescribeStandardsCommand, "NextToken", "NextToken", "MaxResults");
