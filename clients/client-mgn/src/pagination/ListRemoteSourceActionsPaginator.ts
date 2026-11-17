// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRemoteSourceActionsCommand,
  ListRemoteSourceActionsCommandInput,
  ListRemoteSourceActionsCommandOutput,
} from "../commands/ListRemoteSourceActionsCommand";
import { MgnClient } from "../MgnClient";
import type { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRemoteSourceActions: (
  config: MgnPaginationConfiguration,
  input: ListRemoteSourceActionsCommandInput,
  ...rest: any[]
) => Paginator<ListRemoteSourceActionsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListRemoteSourceActionsCommandInput,
  ListRemoteSourceActionsCommandOutput
>(MgnClient, ListRemoteSourceActionsCommand, "nextToken", "nextToken", "maxResults");
