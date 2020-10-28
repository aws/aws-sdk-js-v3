import { SSO } from "../SSO";
import { SSOClient } from "../SSOClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SSOPaginationConfiguration extends PaginationConfiguration {
  client: SSO | SSOClient;
}
