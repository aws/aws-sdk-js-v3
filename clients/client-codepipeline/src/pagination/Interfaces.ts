import { CodePipeline } from "../CodePipeline";
import { CodePipelineClient } from "../CodePipelineClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface CodePipelinePaginationConfiguration extends PaginationConfiguration {
  client: CodePipeline | CodePipelineClient;
}
