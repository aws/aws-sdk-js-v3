// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { SsmSap } from "../SsmSap";
import { SsmSapClient } from "../SsmSapClient";

export interface SsmSapPaginationConfiguration extends PaginationConfiguration {
  client: SsmSap | SsmSapClient;
}
