// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";

export interface SSMPaginationConfiguration extends PaginationConfiguration {
  client: SSM | SSMClient;
}
