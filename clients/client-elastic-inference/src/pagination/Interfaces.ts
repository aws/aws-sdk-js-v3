// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ElasticInference } from "../ElasticInference";
import { ElasticInferenceClient } from "../ElasticInferenceClient";

export interface ElasticInferencePaginationConfiguration extends PaginationConfiguration {
  client: ElasticInference | ElasticInferenceClient;
}
