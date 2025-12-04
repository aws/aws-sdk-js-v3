// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BatchClient } from "../BatchClient";
import {
  DescribeComputeEnvironmentsCommand,
  DescribeComputeEnvironmentsCommandInput,
  DescribeComputeEnvironmentsCommandOutput,
} from "../commands/DescribeComputeEnvironmentsCommand";
import { BatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeComputeEnvironments: (
  config: BatchPaginationConfiguration,
  input: DescribeComputeEnvironmentsCommandInput,
  ...rest: any[]
) => Paginator<DescribeComputeEnvironmentsCommandOutput> = createPaginator<
  BatchPaginationConfiguration,
  DescribeComputeEnvironmentsCommandInput,
  DescribeComputeEnvironmentsCommandOutput
>(BatchClient, DescribeComputeEnvironmentsCommand, "nextToken", "nextToken", "maxResults");
