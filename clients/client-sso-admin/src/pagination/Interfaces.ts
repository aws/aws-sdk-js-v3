// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { SSOAdmin } from "../SSOAdmin";
import { SSOAdminClient } from "../SSOAdminClient";

export interface SSOAdminPaginationConfiguration extends PaginationConfiguration {
  client: SSOAdmin | SSOAdminClient;
}
