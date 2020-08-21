import { CloudFormation } from "../CloudFormation";
import { CloudFormationClient } from "../CloudFormationClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface CloudFormationPaginationConfiguration extends PaginationConfiguration {
  client: CloudFormation | CloudFormationClient;
}
