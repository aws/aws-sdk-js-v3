import { EKS } from "../EKS";
import { EKSClient } from "../EKSClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface EKSPaginationConfiguration extends PaginationConfiguration {
  client: EKS | EKSClient;
}
