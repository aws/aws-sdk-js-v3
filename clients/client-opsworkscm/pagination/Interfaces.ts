import { OpsWorksCM } from "../OpsWorksCM";
import { OpsWorksCMClient } from "../OpsWorksCMClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface OpsWorksCMPaginationConfiguration extends PaginationConfiguration {
  client: OpsWorksCM | OpsWorksCMClient;
}
