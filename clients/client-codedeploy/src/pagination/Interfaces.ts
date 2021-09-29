import { CodeDeploy } from "../CodeDeploy";
import { CodeDeployClient } from "../CodeDeployClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface CodeDeployPaginationConfiguration extends PaginationConfiguration {
  client: CodeDeploy | CodeDeployClient;
}
