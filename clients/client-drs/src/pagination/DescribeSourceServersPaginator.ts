// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSourceServersCommand,
  DescribeSourceServersCommandInput,
  DescribeSourceServersCommandOutput,
} from "../commands/DescribeSourceServersCommand";
import { DrsClient } from "../DrsClient";
import { DrsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSourceServers: (
  config: DrsPaginationConfiguration,
  input: DescribeSourceServersCommandInput,
  ...rest: any[]
) => Paginator<DescribeSourceServersCommandOutput> = createPaginator<
  DrsPaginationConfiguration,
  DescribeSourceServersCommandInput,
  DescribeSourceServersCommandOutput
>(DrsClient, DescribeSourceServersCommand, "nextToken", "nextToken", "maxResults");
