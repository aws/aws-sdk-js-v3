// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDeviceResourcesCommand,
  ListDeviceResourcesCommandInput,
  ListDeviceResourcesCommandOutput,
} from "../commands/ListDeviceResourcesCommand";
import { SnowDeviceManagementClient } from "../SnowDeviceManagementClient";
import { SnowDeviceManagementPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeviceResources: (
  config: SnowDeviceManagementPaginationConfiguration,
  input: ListDeviceResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListDeviceResourcesCommandOutput> = createPaginator<
  SnowDeviceManagementPaginationConfiguration,
  ListDeviceResourcesCommandInput,
  ListDeviceResourcesCommandOutput
>(SnowDeviceManagementClient, ListDeviceResourcesCommand, "nextToken", "nextToken", "maxResults");
