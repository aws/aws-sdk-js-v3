// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListLineageNodeHistoryCommand,
  ListLineageNodeHistoryCommandInput,
  ListLineageNodeHistoryCommandOutput,
} from "../commands/ListLineageNodeHistoryCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLineageNodeHistory: (
  config: DataZonePaginationConfiguration,
  input: ListLineageNodeHistoryCommandInput,
  ...rest: any[]
) => Paginator<ListLineageNodeHistoryCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListLineageNodeHistoryCommandInput,
  ListLineageNodeHistoryCommandOutput
>(DataZoneClient, ListLineageNodeHistoryCommand, "nextToken", "nextToken", "maxResults");
