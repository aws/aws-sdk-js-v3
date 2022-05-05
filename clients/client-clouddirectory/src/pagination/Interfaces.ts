// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { CloudDirectory } from "../CloudDirectory";
import { CloudDirectoryClient } from "../CloudDirectoryClient";

export interface CloudDirectoryPaginationConfiguration extends PaginationConfiguration {
  client: CloudDirectory | CloudDirectoryClient;
}
