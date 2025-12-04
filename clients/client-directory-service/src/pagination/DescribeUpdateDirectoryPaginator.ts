// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeUpdateDirectoryCommand,
  DescribeUpdateDirectoryCommandInput,
  DescribeUpdateDirectoryCommandOutput,
} from "../commands/DescribeUpdateDirectoryCommand";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeUpdateDirectory: (
  config: DirectoryServicePaginationConfiguration,
  input: DescribeUpdateDirectoryCommandInput,
  ...rest: any[]
) => Paginator<DescribeUpdateDirectoryCommandOutput> = createPaginator<
  DirectoryServicePaginationConfiguration,
  DescribeUpdateDirectoryCommandInput,
  DescribeUpdateDirectoryCommandOutput
>(DirectoryServiceClient, DescribeUpdateDirectoryCommand, "NextToken", "NextToken", "");
