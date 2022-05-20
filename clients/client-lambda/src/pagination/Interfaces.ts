// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Lambda } from "../Lambda";
import { LambdaClient } from "../LambdaClient";

export interface LambdaPaginationConfiguration extends PaginationConfiguration {
  client: Lambda | LambdaClient;
}
