import { Lambda } from "../Lambda";
import { LambdaClient } from "../LambdaClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface LambdaPaginationConfiguration extends PaginationConfiguration {
  client: Lambda | LambdaClient;
}
