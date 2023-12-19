// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeServersCommand,
  DescribeServersCommandInput,
  DescribeServersCommandOutput,
} from "../commands/DescribeServersCommand";
import { OpsWorksCMClient } from "../OpsWorksCMClient";
import { OpsWorksCMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeServers: (
  config: OpsWorksCMPaginationConfiguration,
  input: DescribeServersCommandInput,
  ...rest: any[]
) => Paginator<DescribeServersCommandOutput> = createPaginator<
  OpsWorksCMPaginationConfiguration,
  DescribeServersCommandInput,
  DescribeServersCommandOutput
>(OpsWorksCMClient, DescribeServersCommand, "NextToken", "NextToken", "MaxResults");
