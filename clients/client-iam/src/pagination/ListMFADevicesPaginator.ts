// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMFADevicesCommand,
  ListMFADevicesCommandInput,
  ListMFADevicesCommandOutput,
} from "../commands/ListMFADevicesCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMFADevices: (
  config: IAMPaginationConfiguration,
  input: ListMFADevicesCommandInput,
  ...rest: any[]
) => Paginator<ListMFADevicesCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListMFADevicesCommandInput,
  ListMFADevicesCommandOutput
>(IAMClient, ListMFADevicesCommand, "Marker", "Marker", "MaxItems");
