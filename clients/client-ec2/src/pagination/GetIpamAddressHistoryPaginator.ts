// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetIpamAddressHistoryCommand,
  GetIpamAddressHistoryCommandInput,
  GetIpamAddressHistoryCommandOutput,
} from "../commands/GetIpamAddressHistoryCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetIpamAddressHistory: (
  config: EC2PaginationConfiguration,
  input: GetIpamAddressHistoryCommandInput,
  ...rest: any[]
) => Paginator<GetIpamAddressHistoryCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetIpamAddressHistoryCommandInput,
  GetIpamAddressHistoryCommandOutput
>(EC2Client, GetIpamAddressHistoryCommand, "NextToken", "NextToken", "MaxResults");
