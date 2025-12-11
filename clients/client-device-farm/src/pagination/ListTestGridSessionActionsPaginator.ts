// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTestGridSessionActionsCommand,
  ListTestGridSessionActionsCommandInput,
  ListTestGridSessionActionsCommandOutput,
} from "../commands/ListTestGridSessionActionsCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestGridSessionActions: (
  config: DeviceFarmPaginationConfiguration,
  input: ListTestGridSessionActionsCommandInput,
  ...rest: any[]
) => Paginator<ListTestGridSessionActionsCommandOutput> = createPaginator<
  DeviceFarmPaginationConfiguration,
  ListTestGridSessionActionsCommandInput,
  ListTestGridSessionActionsCommandOutput
>(DeviceFarmClient, ListTestGridSessionActionsCommand, "nextToken", "nextToken", "maxResult");
