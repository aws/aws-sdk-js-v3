// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeClusterVersionsCommand,
  DescribeClusterVersionsCommandInput,
  DescribeClusterVersionsCommandOutput,
} from "../commands/DescribeClusterVersionsCommand";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeClusterVersions: (
  config: EKSPaginationConfiguration,
  input: DescribeClusterVersionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeClusterVersionsCommandOutput> = createPaginator<
  EKSPaginationConfiguration,
  DescribeClusterVersionsCommandInput,
  DescribeClusterVersionsCommandOutput
>(EKSClient, DescribeClusterVersionsCommand, "nextToken", "nextToken", "maxResults");
