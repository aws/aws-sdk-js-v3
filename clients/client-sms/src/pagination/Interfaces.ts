// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { SMS } from "../SMS";
import { SMSClient } from "../SMSClient";

export interface SMSPaginationConfiguration extends PaginationConfiguration {
  client: SMS | SMSClient;
}
