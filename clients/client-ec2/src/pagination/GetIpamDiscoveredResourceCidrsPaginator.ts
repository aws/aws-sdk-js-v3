// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetIpamDiscoveredResourceCidrsCommand,
  GetIpamDiscoveredResourceCidrsCommandInput,
  GetIpamDiscoveredResourceCidrsCommandOutput,
} from "../commands/GetIpamDiscoveredResourceCidrsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetIpamDiscoveredResourceCidrs: (
  config: EC2PaginationConfiguration,
  input: GetIpamDiscoveredResourceCidrsCommandInput,
  ...rest: any[]
) => Paginator<GetIpamDiscoveredResourceCidrsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetIpamDiscoveredResourceCidrsCommandInput,
  GetIpamDiscoveredResourceCidrsCommandOutput
>(EC2Client, GetIpamDiscoveredResourceCidrsCommand, "NextToken", "NextToken", "MaxResults");
