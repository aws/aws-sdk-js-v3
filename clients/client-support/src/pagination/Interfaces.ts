// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Support } from "../Support";
import { SupportClient } from "../SupportClient";

export interface SupportPaginationConfiguration extends PaginationConfiguration {
  client: Support | SupportClient;
}
