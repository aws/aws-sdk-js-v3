// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSourceServersCommand,
  DescribeSourceServersCommandInput,
  DescribeSourceServersCommandOutput,
} from "../commands/DescribeSourceServersCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSourceServers: (
  config: MgnPaginationConfiguration,
  input: DescribeSourceServersCommandInput,
  ...rest: any[]
) => Paginator<DescribeSourceServersCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  DescribeSourceServersCommandInput,
  DescribeSourceServersCommandOutput
>(MgnClient, DescribeSourceServersCommand, "nextToken", "nextToken", "maxResults");
