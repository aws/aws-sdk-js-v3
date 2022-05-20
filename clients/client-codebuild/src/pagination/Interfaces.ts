// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { CodeBuild } from "../CodeBuild";
import { CodeBuildClient } from "../CodeBuildClient";

export interface CodeBuildPaginationConfiguration extends PaginationConfiguration {
  client: CodeBuild | CodeBuildClient;
}
