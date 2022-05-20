// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { EKS } from "../EKS";
import { EKSClient } from "../EKSClient";

export interface EKSPaginationConfiguration extends PaginationConfiguration {
  client: EKS | EKSClient;
}
