import { WellArchitected } from "../WellArchitected";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface WellArchitectedPaginationConfiguration extends PaginationConfiguration {
  client: WellArchitected | WellArchitectedClient;
}
