// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetVpnConnectionDeviceTypesCommand,
  GetVpnConnectionDeviceTypesCommandInput,
  GetVpnConnectionDeviceTypesCommandOutput,
} from "../commands/GetVpnConnectionDeviceTypesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetVpnConnectionDeviceTypes: (
  config: EC2PaginationConfiguration,
  input: GetVpnConnectionDeviceTypesCommandInput,
  ...rest: any[]
) => Paginator<GetVpnConnectionDeviceTypesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetVpnConnectionDeviceTypesCommandInput,
  GetVpnConnectionDeviceTypesCommandOutput
>(EC2Client, GetVpnConnectionDeviceTypesCommand, "NextToken", "NextToken", "MaxResults");
