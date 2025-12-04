// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFileSystemsCommand,
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
} from "../commands/DescribeFileSystemsCommand";
import { FSxClient } from "../FSxClient";
import { FSxPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFileSystems: (
  config: FSxPaginationConfiguration,
  input: DescribeFileSystemsCommandInput,
  ...rest: any[]
) => Paginator<DescribeFileSystemsCommandOutput> = createPaginator<
  FSxPaginationConfiguration,
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput
>(FSxClient, DescribeFileSystemsCommand, "NextToken", "NextToken", "MaxResults");
