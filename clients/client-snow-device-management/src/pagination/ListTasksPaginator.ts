// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListTasksCommand, ListTasksCommandInput, ListTasksCommandOutput } from "../commands/ListTasksCommand";
import { SnowDeviceManagementClient } from "../SnowDeviceManagementClient";
import { SnowDeviceManagementPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTasks: (
  config: SnowDeviceManagementPaginationConfiguration,
  input: ListTasksCommandInput,
  ...rest: any[]
) => Paginator<ListTasksCommandOutput> = createPaginator<
  SnowDeviceManagementPaginationConfiguration,
  ListTasksCommandInput,
  ListTasksCommandOutput
>(SnowDeviceManagementClient, ListTasksCommand, "nextToken", "nextToken", "maxResults");
