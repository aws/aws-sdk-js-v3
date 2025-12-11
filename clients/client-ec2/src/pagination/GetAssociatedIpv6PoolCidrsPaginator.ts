// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetAssociatedIpv6PoolCidrsCommand,
  GetAssociatedIpv6PoolCidrsCommandInput,
  GetAssociatedIpv6PoolCidrsCommandOutput,
} from "../commands/GetAssociatedIpv6PoolCidrsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAssociatedIpv6PoolCidrs: (
  config: EC2PaginationConfiguration,
  input: GetAssociatedIpv6PoolCidrsCommandInput,
  ...rest: any[]
) => Paginator<GetAssociatedIpv6PoolCidrsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetAssociatedIpv6PoolCidrsCommandInput,
  GetAssociatedIpv6PoolCidrsCommandOutput
>(EC2Client, GetAssociatedIpv6PoolCidrsCommand, "NextToken", "NextToken", "MaxResults");
