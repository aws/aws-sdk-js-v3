import { CloudDirectory } from "../CloudDirectory";
import { CloudDirectoryClient } from "../CloudDirectoryClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface CloudDirectoryPaginationConfiguration extends PaginationConfiguration {
  client: CloudDirectory | CloudDirectoryClient;
}
