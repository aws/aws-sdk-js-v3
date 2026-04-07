// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetCapacityManagerMonitoredTagKeysCommand,
  GetCapacityManagerMonitoredTagKeysCommandInput,
  GetCapacityManagerMonitoredTagKeysCommandOutput,
} from "../commands/GetCapacityManagerMonitoredTagKeysCommand";
import { EC2Client } from "../EC2Client";
import type { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCapacityManagerMonitoredTagKeys: (
  config: EC2PaginationConfiguration,
  input: GetCapacityManagerMonitoredTagKeysCommandInput,
  ...rest: any[]
) => Paginator<GetCapacityManagerMonitoredTagKeysCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetCapacityManagerMonitoredTagKeysCommandInput,
  GetCapacityManagerMonitoredTagKeysCommandOutput
>(EC2Client, GetCapacityManagerMonitoredTagKeysCommand, "NextToken", "NextToken", "MaxResults");
