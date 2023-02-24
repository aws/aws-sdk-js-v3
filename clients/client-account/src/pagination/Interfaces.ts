// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Account } from "../Account";
import { AccountClient } from "../AccountClient";

export interface AccountPaginationConfiguration extends PaginationConfiguration {
  client: Account | AccountClient;
}
