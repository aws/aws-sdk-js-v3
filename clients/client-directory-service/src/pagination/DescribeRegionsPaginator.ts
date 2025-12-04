// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRegionsCommand,
  DescribeRegionsCommandInput,
  DescribeRegionsCommandOutput,
} from "../commands/DescribeRegionsCommand";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRegions: (
  config: DirectoryServicePaginationConfiguration,
  input: DescribeRegionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeRegionsCommandOutput> = createPaginator<
  DirectoryServicePaginationConfiguration,
  DescribeRegionsCommandInput,
  DescribeRegionsCommandOutput
>(DirectoryServiceClient, DescribeRegionsCommand, "NextToken", "NextToken", "");
