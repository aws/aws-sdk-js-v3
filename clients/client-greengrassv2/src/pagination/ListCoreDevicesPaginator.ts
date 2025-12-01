// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCoreDevicesCommand,
  ListCoreDevicesCommandInput,
  ListCoreDevicesCommandOutput,
} from "../commands/ListCoreDevicesCommand";
import { GreengrassV2Client } from "../GreengrassV2Client";
import { GreengrassV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCoreDevices: (
  config: GreengrassV2PaginationConfiguration,
  input: ListCoreDevicesCommandInput,
  ...rest: any[]
) => Paginator<ListCoreDevicesCommandOutput> = createPaginator<
  GreengrassV2PaginationConfiguration,
  ListCoreDevicesCommandInput,
  ListCoreDevicesCommandOutput
>(GreengrassV2Client, ListCoreDevicesCommand, "nextToken", "nextToken", "maxResults");
