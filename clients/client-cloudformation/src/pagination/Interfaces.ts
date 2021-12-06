import { PaginationConfiguration } from "@aws-sdk/types";

import { CloudFormation } from "../CloudFormation";
import { CloudFormationClient } from "../CloudFormationClient";

export interface CloudFormationPaginationConfiguration extends PaginationConfiguration {
  client: CloudFormation | CloudFormationClient;
}
