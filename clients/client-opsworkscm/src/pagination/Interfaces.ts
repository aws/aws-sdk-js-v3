// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { OpsWorksCM } from "../OpsWorksCM";
import { OpsWorksCMClient } from "../OpsWorksCMClient";

export interface OpsWorksCMPaginationConfiguration extends PaginationConfiguration {
  client: OpsWorksCM | OpsWorksCMClient;
}
