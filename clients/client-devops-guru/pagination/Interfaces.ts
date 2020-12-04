import { DevOpsGuru } from "../DevOpsGuru";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface DevOpsGuruPaginationConfiguration extends PaginationConfiguration {
  client: DevOpsGuru | DevOpsGuruClient;
}
