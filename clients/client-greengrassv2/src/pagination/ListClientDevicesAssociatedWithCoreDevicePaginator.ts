// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListClientDevicesAssociatedWithCoreDeviceCommand,
  ListClientDevicesAssociatedWithCoreDeviceCommandInput,
  ListClientDevicesAssociatedWithCoreDeviceCommandOutput,
} from "../commands/ListClientDevicesAssociatedWithCoreDeviceCommand";
import { GreengrassV2Client } from "../GreengrassV2Client";
import { GreengrassV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClientDevicesAssociatedWithCoreDevice: (
  config: GreengrassV2PaginationConfiguration,
  input: ListClientDevicesAssociatedWithCoreDeviceCommandInput,
  ...rest: any[]
) => Paginator<ListClientDevicesAssociatedWithCoreDeviceCommandOutput> = createPaginator<
  GreengrassV2PaginationConfiguration,
  ListClientDevicesAssociatedWithCoreDeviceCommandInput,
  ListClientDevicesAssociatedWithCoreDeviceCommandOutput
>(GreengrassV2Client, ListClientDevicesAssociatedWithCoreDeviceCommand, "nextToken", "nextToken", "maxResults");
