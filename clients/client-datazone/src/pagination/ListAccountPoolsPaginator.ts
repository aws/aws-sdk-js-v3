// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccountPoolsCommand,
  ListAccountPoolsCommandInput,
  ListAccountPoolsCommandOutput,
} from "../commands/ListAccountPoolsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccountPools: (
  config: DataZonePaginationConfiguration,
  input: ListAccountPoolsCommandInput,
  ...rest: any[]
) => Paginator<ListAccountPoolsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListAccountPoolsCommandInput,
  ListAccountPoolsCommandOutput
>(DataZoneClient, ListAccountPoolsCommand, "nextToken", "nextToken", "maxResults");
