// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListParticipantsCommand,
  ListParticipantsCommandInput,
  ListParticipantsCommandOutput,
} from "../commands/ListParticipantsCommand";
import { IVSRealTimeClient } from "../IVSRealTimeClient";
import { IVSRealTimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListParticipants: (
  config: IVSRealTimePaginationConfiguration,
  input: ListParticipantsCommandInput,
  ...rest: any[]
) => Paginator<ListParticipantsCommandOutput> = createPaginator<
  IVSRealTimePaginationConfiguration,
  ListParticipantsCommandInput,
  ListParticipantsCommandOutput
>(IVSRealTimeClient, ListParticipantsCommand, "nextToken", "nextToken", "maxResults");
