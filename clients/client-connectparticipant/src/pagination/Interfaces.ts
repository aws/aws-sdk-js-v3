// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ConnectParticipant } from "../ConnectParticipant";
import { ConnectParticipantClient } from "../ConnectParticipantClient";

export interface ConnectParticipantPaginationConfiguration extends PaginationConfiguration {
  client: ConnectParticipant | ConnectParticipantClient;
}
