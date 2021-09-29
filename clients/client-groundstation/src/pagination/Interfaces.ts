import { GroundStation } from "../GroundStation";
import { GroundStationClient } from "../GroundStationClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface GroundStationPaginationConfiguration extends PaginationConfiguration {
  client: GroundStation | GroundStationClient;
}
