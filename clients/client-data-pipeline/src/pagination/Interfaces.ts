// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { DataPipeline } from "../DataPipeline";
import { DataPipelineClient } from "../DataPipelineClient";

export interface DataPipelinePaginationConfiguration extends PaginationConfiguration {
  client: DataPipeline | DataPipelineClient;
}
