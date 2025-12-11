// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppflowClient } from "../AppflowClient";
import {
  DescribeConnectorsCommand,
  DescribeConnectorsCommandInput,
  DescribeConnectorsCommandOutput,
} from "../commands/DescribeConnectorsCommand";
import { AppflowPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeConnectors: (
  config: AppflowPaginationConfiguration,
  input: DescribeConnectorsCommandInput,
  ...rest: any[]
) => Paginator<DescribeConnectorsCommandOutput> = createPaginator<
  AppflowPaginationConfiguration,
  DescribeConnectorsCommandInput,
  DescribeConnectorsCommandOutput
>(AppflowClient, DescribeConnectorsCommand, "nextToken", "nextToken", "maxResults");
