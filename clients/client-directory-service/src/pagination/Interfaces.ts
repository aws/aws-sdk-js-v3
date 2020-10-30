import { DirectoryService } from "../DirectoryService";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface DirectoryServicePaginationConfiguration extends PaginationConfiguration {
  client: DirectoryService | DirectoryServiceClient;
}
