// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Snowball } from "../Snowball";
import { SnowballClient } from "../SnowballClient";

export interface SnowballPaginationConfiguration extends PaginationConfiguration {
  client: Snowball | SnowballClient;
}
