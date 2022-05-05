// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { WellArchitected } from "../WellArchitected";
import { WellArchitectedClient } from "../WellArchitectedClient";

export interface WellArchitectedPaginationConfiguration extends PaginationConfiguration {
  client: WellArchitected | WellArchitectedClient;
}
