// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { CleanRooms } from "../CleanRooms";
import { CleanRoomsClient } from "../CleanRoomsClient";

export interface CleanRoomsPaginationConfiguration extends PaginationConfiguration {
  client: CleanRooms | CleanRoomsClient;
}
