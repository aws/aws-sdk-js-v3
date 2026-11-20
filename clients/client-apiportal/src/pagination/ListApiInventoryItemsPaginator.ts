// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { APIPortalClient } from "../APIPortalClient";
import {
  ListApiInventoryItemsCommand,
  ListApiInventoryItemsCommandInput,
  ListApiInventoryItemsCommandOutput,
} from "../commands/ListApiInventoryItemsCommand";
import type { APIPortalPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApiInventoryItems: (
  config: APIPortalPaginationConfiguration,
  input: ListApiInventoryItemsCommandInput,
  ...rest: any[]
) => Paginator<ListApiInventoryItemsCommandOutput> = createPaginator<
  APIPortalPaginationConfiguration,
  ListApiInventoryItemsCommandInput,
  ListApiInventoryItemsCommandOutput
>(APIPortalClient, ListApiInventoryItemsCommand, "nextToken", "nextToken", "maxResults");
