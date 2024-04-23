// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListMeetingsCommand,
  ListMeetingsCommandInput,
  ListMeetingsCommandOutput,
} from "../commands/ListMeetingsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMeetings: (
  config: ChimePaginationConfiguration,
  input: ListMeetingsCommandInput,
  ...rest: any[]
) => Paginator<ListMeetingsCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListMeetingsCommandInput,
  ListMeetingsCommandOutput
>(ChimeClient, ListMeetingsCommand, "NextToken", "NextToken", "MaxResults");
