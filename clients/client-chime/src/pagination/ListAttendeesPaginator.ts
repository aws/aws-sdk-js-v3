// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListAttendeesCommand,
  ListAttendeesCommandInput,
  ListAttendeesCommandOutput,
} from "../commands/ListAttendeesCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAttendees: (
  config: ChimePaginationConfiguration,
  input: ListAttendeesCommandInput,
  ...rest: any[]
) => Paginator<ListAttendeesCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListAttendeesCommandInput,
  ListAttendeesCommandOutput
>(ChimeClient, ListAttendeesCommand, "NextToken", "NextToken", "MaxResults");
