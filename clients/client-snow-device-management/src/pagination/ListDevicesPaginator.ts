// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListDevicesCommand, ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { SnowDeviceManagementClient } from "../SnowDeviceManagementClient";
import { SnowDeviceManagementPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDevices: (
  config: SnowDeviceManagementPaginationConfiguration,
  input: ListDevicesCommandInput,
  ...rest: any[]
) => Paginator<ListDevicesCommandOutput> = createPaginator<
  SnowDeviceManagementPaginationConfiguration,
  ListDevicesCommandInput,
  ListDevicesCommandOutput
>(SnowDeviceManagementClient, ListDevicesCommand, "nextToken", "nextToken", "maxResults");
