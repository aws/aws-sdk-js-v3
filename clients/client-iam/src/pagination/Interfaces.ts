// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";

export interface IAMPaginationConfiguration extends PaginationConfiguration {
  client: IAM | IAMClient;
}
