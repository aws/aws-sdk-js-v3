import { EFS } from "../EFS";
import { EFSClient } from "../EFSClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface EFSPaginationConfiguration extends PaginationConfiguration {
  client: EFS | EFSClient;
}
