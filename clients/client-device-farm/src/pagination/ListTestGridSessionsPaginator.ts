// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTestGridSessionsCommand,
  ListTestGridSessionsCommandInput,
  ListTestGridSessionsCommandOutput,
} from "../commands/ListTestGridSessionsCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestGridSessions: (
  config: DeviceFarmPaginationConfiguration,
  input: ListTestGridSessionsCommandInput,
  ...rest: any[]
) => Paginator<ListTestGridSessionsCommandOutput> = createPaginator<
  DeviceFarmPaginationConfiguration,
  ListTestGridSessionsCommandInput,
  ListTestGridSessionsCommandOutput
>(DeviceFarmClient, ListTestGridSessionsCommand, "nextToken", "nextToken", "maxResult");
