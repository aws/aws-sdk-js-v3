// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeStandardsControlsCommand,
  DescribeStandardsControlsCommandInput,
  DescribeStandardsControlsCommandOutput,
} from "../commands/DescribeStandardsControlsCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeStandardsControls: (
  config: SecurityHubPaginationConfiguration,
  input: DescribeStandardsControlsCommandInput,
  ...rest: any[]
) => Paginator<DescribeStandardsControlsCommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  DescribeStandardsControlsCommandInput,
  DescribeStandardsControlsCommandOutput
>(SecurityHubClient, DescribeStandardsControlsCommand, "NextToken", "NextToken", "MaxResults");
