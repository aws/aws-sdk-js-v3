// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDevicePoolsCommand,
  ListDevicePoolsCommandInput,
  ListDevicePoolsCommandOutput,
} from "../commands/ListDevicePoolsCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDevicePools: (
  config: DeviceFarmPaginationConfiguration,
  input: ListDevicePoolsCommandInput,
  ...rest: any[]
) => Paginator<ListDevicePoolsCommandOutput> = createPaginator<
  DeviceFarmPaginationConfiguration,
  ListDevicePoolsCommandInput,
  ListDevicePoolsCommandOutput
>(DeviceFarmClient, ListDevicePoolsCommand, "nextToken", "nextToken", "");
