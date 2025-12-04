// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetIpamResourceCidrsCommand,
  GetIpamResourceCidrsCommandInput,
  GetIpamResourceCidrsCommandOutput,
} from "../commands/GetIpamResourceCidrsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetIpamResourceCidrs: (
  config: EC2PaginationConfiguration,
  input: GetIpamResourceCidrsCommandInput,
  ...rest: any[]
) => Paginator<GetIpamResourceCidrsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetIpamResourceCidrsCommandInput,
  GetIpamResourceCidrsCommandOutput
>(EC2Client, GetIpamResourceCidrsCommand, "NextToken", "NextToken", "MaxResults");
