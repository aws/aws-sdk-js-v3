import { KMS } from "../KMS";
import { KMSClient } from "../KMSClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface KMSPaginationConfiguration extends PaginationConfiguration {
  client: KMS | KMSClient;
}
