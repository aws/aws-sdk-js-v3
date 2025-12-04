// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTestGridProjectsCommand,
  ListTestGridProjectsCommandInput,
  ListTestGridProjectsCommandOutput,
} from "../commands/ListTestGridProjectsCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestGridProjects: (
  config: DeviceFarmPaginationConfiguration,
  input: ListTestGridProjectsCommandInput,
  ...rest: any[]
) => Paginator<ListTestGridProjectsCommandOutput> = createPaginator<
  DeviceFarmPaginationConfiguration,
  ListTestGridProjectsCommandInput,
  ListTestGridProjectsCommandOutput
>(DeviceFarmClient, ListTestGridProjectsCommand, "nextToken", "nextToken", "maxResult");
