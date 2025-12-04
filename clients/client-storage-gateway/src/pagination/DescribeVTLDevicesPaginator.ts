// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeVTLDevicesCommand,
  DescribeVTLDevicesCommandInput,
  DescribeVTLDevicesCommandOutput,
} from "../commands/DescribeVTLDevicesCommand";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeVTLDevices: (
  config: StorageGatewayPaginationConfiguration,
  input: DescribeVTLDevicesCommandInput,
  ...rest: any[]
) => Paginator<DescribeVTLDevicesCommandOutput> = createPaginator<
  StorageGatewayPaginationConfiguration,
  DescribeVTLDevicesCommandInput,
  DescribeVTLDevicesCommandOutput
>(StorageGatewayClient, DescribeVTLDevicesCommand, "Marker", "Marker", "Limit");
