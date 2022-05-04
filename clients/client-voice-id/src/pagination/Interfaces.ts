// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { VoiceID } from "../VoiceID";
import { VoiceIDClient } from "../VoiceIDClient";

export interface VoiceIDPaginationConfiguration extends PaginationConfiguration {
  client: VoiceID | VoiceIDClient;
}
