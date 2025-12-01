// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeBuildClient } from "../CodeBuildClient";
import {
  DescribeCodeCoveragesCommand,
  DescribeCodeCoveragesCommandInput,
  DescribeCodeCoveragesCommandOutput,
} from "../commands/DescribeCodeCoveragesCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCodeCoverages: (
  config: CodeBuildPaginationConfiguration,
  input: DescribeCodeCoveragesCommandInput,
  ...rest: any[]
) => Paginator<DescribeCodeCoveragesCommandOutput> = createPaginator<
  CodeBuildPaginationConfiguration,
  DescribeCodeCoveragesCommandInput,
  DescribeCodeCoveragesCommandOutput
>(CodeBuildClient, DescribeCodeCoveragesCommand, "nextToken", "nextToken", "maxResults");
