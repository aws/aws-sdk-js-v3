// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRepositoriesCommand,
  DescribeRepositoriesCommandInput,
  DescribeRepositoriesCommandOutput,
} from "../commands/DescribeRepositoriesCommand";
import { ECRPUBLICClient } from "../ECRPUBLICClient";
import type { ECRPUBLICPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRepositories: (
  config: ECRPUBLICPaginationConfiguration,
  input: DescribeRepositoriesCommandInput,
  ...rest: any[]
) => Paginator<DescribeRepositoriesCommandOutput> = createPaginator<
  ECRPUBLICPaginationConfiguration,
  DescribeRepositoriesCommandInput,
  DescribeRepositoriesCommandOutput
>(ECRPUBLICClient, DescribeRepositoriesCommand, "nextToken", "nextToken", "maxResults");
