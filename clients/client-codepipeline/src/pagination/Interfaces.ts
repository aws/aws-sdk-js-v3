// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { CodePipeline } from "../CodePipeline";
import { CodePipelineClient } from "../CodePipelineClient";

export interface CodePipelinePaginationConfiguration extends PaginationConfiguration {
  client: CodePipeline | CodePipelineClient;
}
