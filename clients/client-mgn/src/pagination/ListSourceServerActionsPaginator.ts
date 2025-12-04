// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSourceServerActionsCommand,
  ListSourceServerActionsCommandInput,
  ListSourceServerActionsCommandOutput,
} from "../commands/ListSourceServerActionsCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSourceServerActions: (
  config: MgnPaginationConfiguration,
  input: ListSourceServerActionsCommandInput,
  ...rest: any[]
) => Paginator<ListSourceServerActionsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListSourceServerActionsCommandInput,
  ListSourceServerActionsCommandOutput
>(MgnClient, ListSourceServerActionsCommand, "nextToken", "nextToken", "maxResults");
