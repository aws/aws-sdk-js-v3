// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ChimeSDKMeetings } from "../ChimeSDKMeetings";
import { ChimeSDKMeetingsClient } from "../ChimeSDKMeetingsClient";

export interface ChimeSDKMeetingsPaginationConfiguration extends PaginationConfiguration {
  client: ChimeSDKMeetings | ChimeSDKMeetingsClient;
}
