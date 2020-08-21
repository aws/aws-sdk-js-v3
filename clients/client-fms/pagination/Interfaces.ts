import { FMS } from "../FMS";
import { FMSClient } from "../FMSClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface FMSPaginationConfiguration extends PaginationConfiguration {
  client: FMS | FMSClient;
}
