// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetIpamDiscoveredAccountsCommand,
  GetIpamDiscoveredAccountsCommandInput,
  GetIpamDiscoveredAccountsCommandOutput,
} from "../commands/GetIpamDiscoveredAccountsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetIpamDiscoveredAccounts: (
  config: EC2PaginationConfiguration,
  input: GetIpamDiscoveredAccountsCommandInput,
  ...rest: any[]
) => Paginator<GetIpamDiscoveredAccountsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetIpamDiscoveredAccountsCommandInput,
  GetIpamDiscoveredAccountsCommandOutput
>(EC2Client, GetIpamDiscoveredAccountsCommand, "NextToken", "NextToken", "MaxResults");
