import { ECR } from "../ECR";
import { ECRClient } from "../ECRClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ECRPaginationConfiguration extends PaginationConfiguration {
  client: ECR | ECRClient;
}
