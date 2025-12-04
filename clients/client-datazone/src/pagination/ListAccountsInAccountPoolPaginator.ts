// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccountsInAccountPoolCommand,
  ListAccountsInAccountPoolCommandInput,
  ListAccountsInAccountPoolCommandOutput,
} from "../commands/ListAccountsInAccountPoolCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccountsInAccountPool: (
  config: DataZonePaginationConfiguration,
  input: ListAccountsInAccountPoolCommandInput,
  ...rest: any[]
) => Paginator<ListAccountsInAccountPoolCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListAccountsInAccountPoolCommandInput,
  ListAccountsInAccountPoolCommandOutput
>(DataZoneClient, ListAccountsInAccountPoolCommand, "nextToken", "nextToken", "maxResults");
