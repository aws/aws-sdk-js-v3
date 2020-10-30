import { EBS } from "../EBS";
import { EBSClient } from "../EBSClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface EBSPaginationConfiguration extends PaginationConfiguration {
  client: EBS | EBSClient;
}
