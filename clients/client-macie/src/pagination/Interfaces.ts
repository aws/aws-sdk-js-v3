// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Macie } from "../Macie";
import { MacieClient } from "../MacieClient";

export interface MaciePaginationConfiguration extends PaginationConfiguration {
  client: Macie | MacieClient;
}
