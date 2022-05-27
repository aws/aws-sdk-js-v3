// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { EMRServerless } from "../EMRServerless";
import { EMRServerlessClient } from "../EMRServerlessClient";

export interface EMRServerlessPaginationConfiguration extends PaginationConfiguration {
  client: EMRServerless | EMRServerlessClient;
}
