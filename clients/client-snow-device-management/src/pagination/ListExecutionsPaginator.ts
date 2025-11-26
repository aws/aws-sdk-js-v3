// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExecutionsCommand,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
} from "../commands/ListExecutionsCommand";
import { SnowDeviceManagementClient } from "../SnowDeviceManagementClient";
import { SnowDeviceManagementPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExecutions: (
  config: SnowDeviceManagementPaginationConfiguration,
  input: ListExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListExecutionsCommandOutput> = createPaginator<
  SnowDeviceManagementPaginationConfiguration,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput
>(SnowDeviceManagementClient, ListExecutionsCommand, "nextToken", "nextToken", "maxResults");
