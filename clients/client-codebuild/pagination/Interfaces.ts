import { CodeBuild } from "../CodeBuild";
import { CodeBuildClient } from "../CodeBuildClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface CodeBuildPaginationConfiguration extends PaginationConfiguration {
  client: CodeBuild | CodeBuildClient;
}
