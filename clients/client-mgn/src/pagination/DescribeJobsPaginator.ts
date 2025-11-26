// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeJobsCommand,
  DescribeJobsCommandInput,
  DescribeJobsCommandOutput,
} from "../commands/DescribeJobsCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeJobs: (
  config: MgnPaginationConfiguration,
  input: DescribeJobsCommandInput,
  ...rest: any[]
) => Paginator<DescribeJobsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  DescribeJobsCommandInput,
  DescribeJobsCommandOutput
>(MgnClient, DescribeJobsCommand, "nextToken", "nextToken", "maxResults");
