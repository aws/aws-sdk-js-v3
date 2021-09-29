import { OpsWorks } from "../OpsWorks";
import { OpsWorksClient } from "../OpsWorksClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface OpsWorksPaginationConfiguration extends PaginationConfiguration {
  client: OpsWorks | OpsWorksClient;
}
