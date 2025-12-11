// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListDevicesCommand, ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDevices: (
  config: DeviceFarmPaginationConfiguration,
  input: ListDevicesCommandInput,
  ...rest: any[]
) => Paginator<ListDevicesCommandOutput> = createPaginator<
  DeviceFarmPaginationConfiguration,
  ListDevicesCommandInput,
  ListDevicesCommandOutput
>(DeviceFarmClient, ListDevicesCommand, "nextToken", "nextToken", "");
