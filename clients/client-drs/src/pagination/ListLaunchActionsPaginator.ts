// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLaunchActionsCommand,
  ListLaunchActionsCommandInput,
  ListLaunchActionsCommandOutput,
} from "../commands/ListLaunchActionsCommand";
import { DrsClient } from "../DrsClient";
import { DrsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLaunchActions: (
  config: DrsPaginationConfiguration,
  input: ListLaunchActionsCommandInput,
  ...rest: any[]
) => Paginator<ListLaunchActionsCommandOutput> = createPaginator<
  DrsPaginationConfiguration,
  ListLaunchActionsCommandInput,
  ListLaunchActionsCommandOutput
>(DrsClient, ListLaunchActionsCommand, "nextToken", "nextToken", "maxResults");
