// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListVirtualMFADevicesCommand,
  ListVirtualMFADevicesCommandInput,
  ListVirtualMFADevicesCommandOutput,
} from "../commands/ListVirtualMFADevicesCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVirtualMFADevices: (
  config: IAMPaginationConfiguration,
  input: ListVirtualMFADevicesCommandInput,
  ...rest: any[]
) => Paginator<ListVirtualMFADevicesCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListVirtualMFADevicesCommandInput,
  ListVirtualMFADevicesCommandOutput
>(IAMClient, ListVirtualMFADevicesCommand, "Marker", "Marker", "MaxItems");
