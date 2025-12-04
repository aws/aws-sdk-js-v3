// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLineageEventsCommand,
  ListLineageEventsCommandInput,
  ListLineageEventsCommandOutput,
} from "../commands/ListLineageEventsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLineageEvents: (
  config: DataZonePaginationConfiguration,
  input: ListLineageEventsCommandInput,
  ...rest: any[]
) => Paginator<ListLineageEventsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListLineageEventsCommandInput,
  ListLineageEventsCommandOutput
>(DataZoneClient, ListLineageEventsCommand, "nextToken", "nextToken", "maxResults");
