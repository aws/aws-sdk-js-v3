// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Location } from "../Location";
import { LocationClient } from "../LocationClient";

export interface LocationPaginationConfiguration extends PaginationConfiguration {
  client: Location | LocationClient;
}
