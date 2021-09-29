import { Location } from "../Location";
import { LocationClient } from "../LocationClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface LocationPaginationConfiguration extends PaginationConfiguration {
  client: Location | LocationClient;
}
