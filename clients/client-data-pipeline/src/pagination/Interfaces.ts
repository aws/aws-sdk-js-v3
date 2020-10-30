import { DataPipeline } from "../DataPipeline";
import { DataPipelineClient } from "../DataPipelineClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface DataPipelinePaginationConfiguration extends PaginationConfiguration {
  client: DataPipeline | DataPipelineClient;
}
