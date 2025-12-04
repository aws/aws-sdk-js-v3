// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDirectoriesCommand,
  DescribeDirectoriesCommandInput,
  DescribeDirectoriesCommandOutput,
} from "../commands/DescribeDirectoriesCommand";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDirectories: (
  config: DirectoryServicePaginationConfiguration,
  input: DescribeDirectoriesCommandInput,
  ...rest: any[]
) => Paginator<DescribeDirectoriesCommandOutput> = createPaginator<
  DirectoryServicePaginationConfiguration,
  DescribeDirectoriesCommandInput,
  DescribeDirectoriesCommandOutput
>(DirectoryServiceClient, DescribeDirectoriesCommand, "NextToken", "NextToken", "Limit");
