// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ConnectCases } from "../ConnectCases";
import { ConnectCasesClient } from "../ConnectCasesClient";

export interface ConnectCasesPaginationConfiguration extends PaginationConfiguration {
  client: ConnectCases | ConnectCasesClient;
}
