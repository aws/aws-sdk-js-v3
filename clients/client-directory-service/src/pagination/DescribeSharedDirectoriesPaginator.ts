// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSharedDirectoriesCommand,
  DescribeSharedDirectoriesCommandInput,
  DescribeSharedDirectoriesCommandOutput,
} from "../commands/DescribeSharedDirectoriesCommand";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSharedDirectories: (
  config: DirectoryServicePaginationConfiguration,
  input: DescribeSharedDirectoriesCommandInput,
  ...rest: any[]
) => Paginator<DescribeSharedDirectoriesCommandOutput> = createPaginator<
  DirectoryServicePaginationConfiguration,
  DescribeSharedDirectoriesCommandInput,
  DescribeSharedDirectoriesCommandOutput
>(DirectoryServiceClient, DescribeSharedDirectoriesCommand, "NextToken", "NextToken", "Limit");
