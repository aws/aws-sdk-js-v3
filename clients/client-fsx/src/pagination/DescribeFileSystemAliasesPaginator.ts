// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFileSystemAliasesCommand,
  DescribeFileSystemAliasesCommandInput,
  DescribeFileSystemAliasesCommandOutput,
} from "../commands/DescribeFileSystemAliasesCommand";
import { FSxClient } from "../FSxClient";
import { FSxPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFileSystemAliases: (
  config: FSxPaginationConfiguration,
  input: DescribeFileSystemAliasesCommandInput,
  ...rest: any[]
) => Paginator<DescribeFileSystemAliasesCommandOutput> = createPaginator<
  FSxPaginationConfiguration,
  DescribeFileSystemAliasesCommandInput,
  DescribeFileSystemAliasesCommandOutput
>(FSxClient, DescribeFileSystemAliasesCommand, "NextToken", "NextToken", "MaxResults");
