// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { EFS } from "../EFS";
import { EFSClient } from "../EFSClient";

export interface EFSPaginationConfiguration extends PaginationConfiguration {
  client: EFS | EFSClient;
}
