import { ElasticInference } from "../ElasticInference";
import { ElasticInferenceClient } from "../ElasticInferenceClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ElasticInferencePaginationConfiguration extends PaginationConfiguration {
  client: ElasticInference | ElasticInferenceClient;
}
