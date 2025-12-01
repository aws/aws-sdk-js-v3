// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetIpamPoolCidrsCommand,
  GetIpamPoolCidrsCommandInput,
  GetIpamPoolCidrsCommandOutput,
} from "../commands/GetIpamPoolCidrsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetIpamPoolCidrs: (
  config: EC2PaginationConfiguration,
  input: GetIpamPoolCidrsCommandInput,
  ...rest: any[]
) => Paginator<GetIpamPoolCidrsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetIpamPoolCidrsCommandInput,
  GetIpamPoolCidrsCommandOutput
>(EC2Client, GetIpamPoolCidrsCommand, "NextToken", "NextToken", "MaxResults");
