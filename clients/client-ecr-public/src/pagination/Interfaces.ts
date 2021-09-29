import { ECRPUBLIC } from "../ECRPUBLIC";
import { ECRPUBLICClient } from "../ECRPUBLICClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ECRPUBLICPaginationConfiguration extends PaginationConfiguration {
  client: ECRPUBLIC | ECRPUBLICClient;
}
