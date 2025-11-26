// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTimelineEventsCommand,
  ListTimelineEventsCommandInput,
  ListTimelineEventsCommandOutput,
} from "../commands/ListTimelineEventsCommand";
import { SSMIncidentsClient } from "../SSMIncidentsClient";
import { SSMIncidentsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTimelineEvents: (
  config: SSMIncidentsPaginationConfiguration,
  input: ListTimelineEventsCommandInput,
  ...rest: any[]
) => Paginator<ListTimelineEventsCommandOutput> = createPaginator<
  SSMIncidentsPaginationConfiguration,
  ListTimelineEventsCommandInput,
  ListTimelineEventsCommandOutput
>(SSMIncidentsClient, ListTimelineEventsCommand, "nextToken", "nextToken", "maxResults");
