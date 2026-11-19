// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListUpdatesCommand, ListUpdatesCommandInput, ListUpdatesCommandOutput } from "../commands/ListUpdatesCommand";
import { RTBFabricClient } from "../RTBFabricClient";
import type { RTBFabricPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUpdates: (
  config: RTBFabricPaginationConfiguration,
  input: ListUpdatesCommandInput,
  ...rest: any[]
) => Paginator<ListUpdatesCommandOutput> = createPaginator<
  RTBFabricPaginationConfiguration,
  ListUpdatesCommandInput,
  ListUpdatesCommandOutput
>(RTBFabricClient, ListUpdatesCommand, "nextToken", "nextToken", "maxResults");
