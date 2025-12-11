// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeJobsCommand,
  DescribeJobsCommandInput,
  DescribeJobsCommandOutput,
} from "../commands/DescribeJobsCommand";
import { DrsClient } from "../DrsClient";
import { DrsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeJobs: (
  config: DrsPaginationConfiguration,
  input: DescribeJobsCommandInput,
  ...rest: any[]
) => Paginator<DescribeJobsCommandOutput> = createPaginator<
  DrsPaginationConfiguration,
  DescribeJobsCommandInput,
  DescribeJobsCommandOutput
>(DrsClient, DescribeJobsCommand, "nextToken", "nextToken", "maxResults");
