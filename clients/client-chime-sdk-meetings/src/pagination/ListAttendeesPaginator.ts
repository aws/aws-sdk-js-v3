// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKMeetingsClient } from "../ChimeSDKMeetingsClient";
import {
  ListAttendeesCommand,
  ListAttendeesCommandInput,
  ListAttendeesCommandOutput,
} from "../commands/ListAttendeesCommand";
import { ChimeSDKMeetingsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAttendees: (
  config: ChimeSDKMeetingsPaginationConfiguration,
  input: ListAttendeesCommandInput,
  ...rest: any[]
) => Paginator<ListAttendeesCommandOutput> = createPaginator<
  ChimeSDKMeetingsPaginationConfiguration,
  ListAttendeesCommandInput,
  ListAttendeesCommandOutput
>(ChimeSDKMeetingsClient, ListAttendeesCommand, "NextToken", "NextToken", "MaxResults");
