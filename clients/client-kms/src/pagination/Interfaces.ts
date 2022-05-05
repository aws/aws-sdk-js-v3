// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { KMS } from "../KMS";
import { KMSClient } from "../KMSClient";

export interface KMSPaginationConfiguration extends PaginationConfiguration {
  client: KMS | KMSClient;
}
