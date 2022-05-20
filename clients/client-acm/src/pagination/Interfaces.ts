// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ACM } from "../ACM";
import { ACMClient } from "../ACMClient";

export interface ACMPaginationConfiguration extends PaginationConfiguration {
  client: ACM | ACMClient;
}
