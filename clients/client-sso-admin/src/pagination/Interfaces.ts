import { SSOAdmin } from "../SSOAdmin";
import { SSOAdminClient } from "../SSOAdminClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SSOAdminPaginationConfiguration extends PaginationConfiguration {
  client: SSOAdmin | SSOAdminClient;
}
