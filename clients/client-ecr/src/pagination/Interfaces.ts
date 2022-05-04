// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ECR } from "../ECR";
import { ECRClient } from "../ECRClient";

export interface ECRPaginationConfiguration extends PaginationConfiguration {
  client: ECR | ECRClient;
}
