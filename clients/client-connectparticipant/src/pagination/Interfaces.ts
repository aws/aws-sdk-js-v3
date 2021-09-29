import { ConnectParticipant } from "../ConnectParticipant";
import { ConnectParticipantClient } from "../ConnectParticipantClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ConnectParticipantPaginationConfiguration extends PaginationConfiguration {
  client: ConnectParticipant | ConnectParticipantClient;
}
