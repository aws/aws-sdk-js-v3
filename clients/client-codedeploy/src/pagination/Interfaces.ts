// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { CodeDeploy } from "../CodeDeploy";
import { CodeDeployClient } from "../CodeDeployClient";

export interface CodeDeployPaginationConfiguration extends PaginationConfiguration {
  client: CodeDeploy | CodeDeployClient;
}
