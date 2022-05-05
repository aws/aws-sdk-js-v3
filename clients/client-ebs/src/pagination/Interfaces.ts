// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { EBS } from "../EBS";
import { EBSClient } from "../EBSClient";

export interface EBSPaginationConfiguration extends PaginationConfiguration {
  client: EBS | EBSClient;
}
