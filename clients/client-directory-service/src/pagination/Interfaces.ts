// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { DirectoryService } from "../DirectoryService";
import { DirectoryServiceClient } from "../DirectoryServiceClient";

export interface DirectoryServicePaginationConfiguration extends PaginationConfiguration {
  client: DirectoryService | DirectoryServiceClient;
}
