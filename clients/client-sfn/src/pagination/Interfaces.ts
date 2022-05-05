// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { SFN } from "../SFN";
import { SFNClient } from "../SFNClient";

export interface SFNPaginationConfiguration extends PaginationConfiguration {
  client: SFN | SFNClient;
}
