// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeBuildClient } from "../CodeBuildClient";
import {
  DescribeTestCasesCommand,
  DescribeTestCasesCommandInput,
  DescribeTestCasesCommandOutput,
} from "../commands/DescribeTestCasesCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTestCases: (
  config: CodeBuildPaginationConfiguration,
  input: DescribeTestCasesCommandInput,
  ...rest: any[]
) => Paginator<DescribeTestCasesCommandOutput> = createPaginator<
  CodeBuildPaginationConfiguration,
  DescribeTestCasesCommandInput,
  DescribeTestCasesCommandOutput
>(CodeBuildClient, DescribeTestCasesCommand, "nextToken", "nextToken", "maxResults");
