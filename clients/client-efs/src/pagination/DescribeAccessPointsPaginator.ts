// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeAccessPointsCommand,
  DescribeAccessPointsCommandInput,
  DescribeAccessPointsCommandOutput,
} from "../commands/DescribeAccessPointsCommand";
import { EFSClient } from "../EFSClient";
import { EFSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAccessPoints: (
  config: EFSPaginationConfiguration,
  input: DescribeAccessPointsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAccessPointsCommandOutput> = createPaginator<
  EFSPaginationConfiguration,
  DescribeAccessPointsCommandInput,
  DescribeAccessPointsCommandOutput
>(EFSClient, DescribeAccessPointsCommand, "NextToken", "NextToken", "MaxResults");
