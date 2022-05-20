// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Rbin } from "../Rbin";
import { RbinClient } from "../RbinClient";

export interface RbinPaginationConfiguration extends PaginationConfiguration {
  client: Rbin | RbinClient;
}
