import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface IAMPaginationConfiguration extends PaginationConfiguration {
  client: IAM | IAMClient;
}
