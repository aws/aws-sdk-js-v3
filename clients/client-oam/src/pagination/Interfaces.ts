// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { OAM } from "../OAM";
import { OAMClient } from "../OAMClient";

export interface OAMPaginationConfiguration extends PaginationConfiguration {
  client: OAM | OAMClient;
}
