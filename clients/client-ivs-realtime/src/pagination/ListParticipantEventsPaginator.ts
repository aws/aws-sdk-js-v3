// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListParticipantEventsCommand,
  ListParticipantEventsCommandInput,
  ListParticipantEventsCommandOutput,
} from "../commands/ListParticipantEventsCommand";
import { IVSRealTimeClient } from "../IVSRealTimeClient";
import { IVSRealTimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListParticipantEvents: (
  config: IVSRealTimePaginationConfiguration,
  input: ListParticipantEventsCommandInput,
  ...rest: any[]
) => Paginator<ListParticipantEventsCommandOutput> = createPaginator<
  IVSRealTimePaginationConfiguration,
  ListParticipantEventsCommandInput,
  ListParticipantEventsCommandOutput
>(IVSRealTimeClient, ListParticipantEventsCommand, "nextToken", "nextToken", "maxResults");
