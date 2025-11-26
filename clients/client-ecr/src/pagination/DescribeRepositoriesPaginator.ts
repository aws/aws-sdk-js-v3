// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeRepositoriesCommand,
  DescribeRepositoriesCommandInput,
  DescribeRepositoriesCommandOutput,
} from "../commands/DescribeRepositoriesCommand";
import { ECRClient } from "../ECRClient";
import { ECRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRepositories: (
  config: ECRPaginationConfiguration,
  input: DescribeRepositoriesCommandInput,
  ...rest: any[]
) => Paginator<DescribeRepositoriesCommandOutput> = createPaginator<
  ECRPaginationConfiguration,
  DescribeRepositoriesCommandInput,
  DescribeRepositoriesCommandOutput
>(ECRClient, DescribeRepositoriesCommand, "nextToken", "nextToken", "maxResults");
