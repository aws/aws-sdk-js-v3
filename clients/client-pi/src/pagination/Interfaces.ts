import { PaginationConfiguration } from "@aws-sdk/types";

import { PI } from "../PI";
import { PIClient } from "../PIClient";

export interface PIPaginationConfiguration extends PaginationConfiguration {
  client: PI | PIClient;
}
