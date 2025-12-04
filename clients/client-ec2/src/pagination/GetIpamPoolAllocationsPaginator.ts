// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetIpamPoolAllocationsCommand,
  GetIpamPoolAllocationsCommandInput,
  GetIpamPoolAllocationsCommandOutput,
} from "../commands/GetIpamPoolAllocationsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetIpamPoolAllocations: (
  config: EC2PaginationConfiguration,
  input: GetIpamPoolAllocationsCommandInput,
  ...rest: any[]
) => Paginator<GetIpamPoolAllocationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetIpamPoolAllocationsCommandInput,
  GetIpamPoolAllocationsCommandOutput
>(EC2Client, GetIpamPoolAllocationsCommand, "NextToken", "NextToken", "MaxResults");
