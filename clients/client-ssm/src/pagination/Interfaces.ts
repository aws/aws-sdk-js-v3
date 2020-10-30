import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SSMPaginationConfiguration extends PaginationConfiguration {
  client: SSM | SSMClient;
}
