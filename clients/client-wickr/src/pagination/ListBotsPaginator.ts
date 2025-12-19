// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListBotsCommand, ListBotsCommandInput, ListBotsCommandOutput } from "../commands/ListBotsCommand";
import { WickrClient } from "../WickrClient";
import { WickrPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBots: (
  config: WickrPaginationConfiguration,
  input: ListBotsCommandInput,
  ...rest: any[]
) => Paginator<ListBotsCommandOutput> = createPaginator<
  WickrPaginationConfiguration,
  ListBotsCommandInput,
  ListBotsCommandOutput
>(WickrClient, ListBotsCommand, "nextToken", "nextToken", "maxResults");
